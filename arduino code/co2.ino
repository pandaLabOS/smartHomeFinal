#include <WiFiManager.h>
#include <ESP8266WiFi.h>
#include <PubSubClient.h>



//Include the library
#include <MQUnifiedsensor.h>

//Definitions
#define placa "ESP8266"
#define Voltage_Resolution 5
#define pin A0 //Analog input 0 of your arduino
#define type "MQ-135" //MQ135
#define ADC_Bit_Resolution 10 // For arduino UNO/MEGA/NANO
#define RatioMQ135CleanAir 3.6//RS / R0 = 3.6 ppm  
//#define calibration_button 13 //Pin to calibrate your sensor

MQUnifiedsensor MQ135(placa, Voltage_Resolution, ADC_Bit_Resolution, pin, type);

IPAddress staticIP(192,168,2,80);
IPAddress gateway(192,168,1,9);
IPAddress subnet(255,255,255,0);

int sensorValue;
//int digitalValue;

//IPAddress server(192,168,2,33);
IPAddress server;
int mqtt_port;
char temp_port[5];

WiFiClient espClient;
PubSubClient client(espClient);


void callback(String topic, byte* message, unsigned int length) {
  Serial.print("Message arrived on topic: ");
  Serial.print(topic);
  Serial.print(". Message: ");
  String messageTemp;
  
  for (int i = 0; i < length; i++) {
    Serial.print((char)message[i]);
    messageTemp += (char)message[i];
  }
  Serial.println();
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Attempt to connect
    if (client.connect("ESP8266Client_CO2")) {
      Serial.println("connected");  
      client.subscribe("co2");
      
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void setup() {
  
  WiFi.mode(WIFI_STA); // explicitly set mode, esp defaults to STA+AP

  
  Serial.begin(9600);                     // initialize serial

  dht.begin();
  
  WiFiManagerParameter custom_server("server", "Server", "", 40);
  WiFiManagerParameter custom_mqtt_port("port", "MQTT Port", "", 6);
  WiFiManager wm;
  //wm.resetSettings();

  // reset settings - wipe stored credentials for testing
  // these are stored by the esp library
  //wm.resetSettings(); //for next time setup (MUST USE)
  
  wm.setSTAStaticIPConfig(staticIP, gateway, subnet); // set ip config for lessing power consumption
  wm.addParameter(&custom_server);
  wm.addParameter(&custom_mqtt_port);
  // Automatically connect using saved credentials,
  // if connection fails, it starts an access point with the specified name ( "AutoConnectAP"),
  // if empty will auto generate SSID, if password is blank it will be anonymous AP (wm.autoConnect())
  // then goes into a blocking loop awaiting configuration and will return success result

  bool res;
  // res = wm.autoConnect(); // auto generated AP name from chipid
  // res = wm.autoConnect("AutoConnectAP"); // anonymous ap
  res = wm.autoConnect("AP-TempAndHumid", "12345678"); // ap-name and ap-password

  if(!res) {
      Serial.println("Failed to connect");
      ESP.restart();
  } 
  else {
      //if you get here you have connected to the WiFi    
      Serial.println("connected...yeey :)");
  }
  server.fromString(custom_server.getValue());
  mqtt_port = atoi(strcpy(temp_port, custom_mqtt_port.getValue()));
  //Serial.println(WiFi.localIP());
  client.setServer(server, mqtt_port);
  client.setCallback(callback);

  //Set math model to calculate the PPM concentration and the value of constants
  MQ135.setRegressionMethod(1); //_PPM =  a*ratio^b
  
  /*****************************  MQ Init ********************************************/ 
  //Remarks: Configure the pin of arduino as input.
  /************************************************************************************/ 
  MQ135.init(); 
  /* 
    //If the RL value is different from 10K please assign your RL value with the following method:
    MQ135.setRL(10);
  */
  MQ135.setRL(1); //R0 is 1000 Ohm
  /*****************************  MQ CAlibration ********************************************/ 
  // Explanation: 
  // In this routine the sensor will measure the resistance of the sensor supposedly before being pre-heated
  // and on clean air (Calibration conditions), setting up R0 value.
  // We recomend executing this routine only on setup in laboratory conditions.
  // This routine does not need to be executed on each restart, you can load your R0 value from eeprom.
  // Acknowledgements: https://jayconsystems.com/blog/understanding-a-gas-sensor
  Serial.print("Calibrating please wait.");
  float calcR0 = 0;
  for(int i = 1; i<=10; i ++)
  {
    MQ135.update(); // Update data, the arduino will read the voltage from the analog pin
    calcR0 += MQ135.calibrate(RatioMQ135CleanAir);
    Serial.print(".");
  }
  MQ135.setR0(calcR0/10);
  Serial.println("  done!.");
  
  if(isinf(calcR0)) {Serial.println("Warning: Conection issue, R0 is infinite (Open circuit detected) please check your wiring and supply"); while(1);}
  if(calcR0 == 0){Serial.println("Warning: Conection issue found, R0 is zero (Analog pin shorts to ground) please check your wiring and supply"); while(1);}
}

void loop() {
  //wifi connect
  if (!client.connected()) {
    reconnect();
  }
  if(!client.loop())
    client.connect("ESP8266Client_CO2");

    
  MQ135.update(); 
  MQ135.setA(110.47); MQ135.setB(-2.862); // Configure the equation to calculate CO2 concentration value
  float CO2 = MQ135.readSensor(); // Sensor will read PPM concentration using the model, a and b values set previously or from the setup

  Serial.println(CO2 + 400); 
  
  float Cvalue = CO2 + 400;
  char testing[8];
  dtostrf(Cvalue, 1, 2, testing);
  client.publish("co2", testing);
  delay(10000); //Sampling frequency
}
