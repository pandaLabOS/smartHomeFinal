import urllib.request

get_url= urllib.request.urlopen('https://www.google.com/')

print("Response Status: "+ str(get_url.getcode()) )

#Open google in python - Windows
import webbrowser
url='https://google.com'
webbrowser.get('C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s').open(url)

#Open google in python - MacOSX
#import os
#os.system("open https://google.com")