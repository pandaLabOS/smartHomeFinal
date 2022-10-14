(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7711:
/***/ ((module) => {

// Exports
module.exports = {
	"cameraFeed": "Cameras_cameraFeed__MczaO",
	"camera1Button": "Cameras_camera1Button__tJMch",
	"camera2Button": "Cameras_camera2Button__tx090",
	"camera3Button": "Cameras_camera3Button__tRuLQ",
	"camera4Button": "Cameras_camera4Button__wcG0M",
	"cameraPanel": "Cameras_cameraPanel__pZDKU",
	"remotesLink": "Cameras_remotesLink__fcZ_7"
};


/***/ }),

/***/ 3781:
/***/ ((module) => {

// Exports
module.exports = {
	"devicesCP": "Devices_devicesCP__8_Hh_",
	"hallwayLightsCard": "Devices_hallwayLightsCard__5jbm_",
	"livingRoomLightsCard": "Devices_livingRoomLightsCard__nPmGD",
	"diningRoomLightsCard": "Devices_diningRoomLightsCard__sMT3r",
	"acCard": "Devices_acCard__5GUs4",
	"tvCard": "Devices_tvCard__CQ5xf",
	"remotesCard": "Devices_remotesCard__WjBlV"
};


/***/ }),

/***/ 7898:
/***/ ((module) => {

// Exports
module.exports = {
	"morningCard": "Scenes_morningCard__4YHc_",
	"morningTCard": "Scenes_morningTCard__7lJto",
	"nightCard": "Scenes_nightCard__tXgZt",
	"nightTCard": "Scenes_nightTCard__CpmoU",
	"arrivingCard": "Scenes_arrivingCard__5fmZk",
	"arrivingTCard": "Scenes_arrivingTCard__40Akj",
	"leavingCard": "Scenes_leavingCard__fwuoM",
	"leavingTCard": "Scenes_leavingTCard__VulM8",
	"defaultTCard": "Scenes_defaultTCard__l7tz_",
	"defaultCard": "Scenes_defaultCard__IZlUe",
	"scenesCP": "Scenes_scenesCP__E_9Eu"
};


/***/ }),

/***/ 5621:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "sensorReadings_container__edcaS"
};


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1288);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7898);
/* harmony import */ var _styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3781);
/* harmony import */ var _styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7711);
/* harmony import */ var _styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_sensorReadings_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5621);
/* harmony import */ var _styles_sensorReadings_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_sensorReadings_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5941);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4612);
/* harmony import */ var _util_dbconnect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7754);
/* harmony import */ var _util_submit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2305);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__, socket_io_client__WEBPACK_IMPORTED_MODULE_5__]);
([swr__WEBPACK_IMPORTED_MODULE_4__, socket_io_client__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














let socket;
const fetcher = (...args)=>fetch(...args).then((res)=>res.json());
//fetch state of sensor based on id and pass to query url on the beginning
function FetchState({ eid  }) {
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__["default"])(`./api/findOnStartup/?${eid}`, fetcher);
    return {
        result: data,
        isLoading: !error && !data,
        isError: error
    };
}
function Home(props) {
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
    });
    const { 0: CO2 , 1: setCo2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: temp , 1: setTemp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: humid , 1: setHumid  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: door , 1: setDoor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: kitdoor , 1: setkitDoor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: hallway , 1: setHallway  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    const { 0: living , 1: setLiving  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    const { 0: dining , 1: setDining  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    const { 0: tv , 1: setTv  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    const { 0: pm25 , 1: setPM  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    const { 0: aqi , 1: setAQI  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    const { 0: scene , 1: setScene  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("defaultS");
    const socketInitializer = async ()=>{
        //dbConnect()
        await fetch("/api/socket");
        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__["default"])();
        socket.on("connect", ()=>{
            console.log("connected");
        });
        socket.on("changeData", (result)=>{
            const re = result.sensor;
            const ul = result.state;
            switch(re){
                case "co2":
                    setCo2(ul);
                    break;
                case "temp":
                    setTemp(ul);
                    break;
                case "humid":
                    setHumid(ul);
                    break;
                case "door":
                    setDoor(ul);
                    break;
                case "kitdoor":
                    setkitDoor(ul);
                    break;
                case "hallway":
                    setHallway(ul);
                    break;
                case "living":
                    setLiving(ul);
                    break;
                case "dining":
                    setDining(ul);
                    break;
                case "tv":
                    setTv(ul);
                    break;
                case "aqi":
                    setAQI(ul);
                    break;
                case "pm25":
                    setPM(ul);
                    break;
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        socketInitializer();
    });
    //Scene Control
    //Device Control
    function handleClick_camera1() {
        /*Active*/ document.getElementById("camera1").style.opacity = "1";
        /*Inactive*/ document.getElementById("camera2").style.opacity = "0.5";
        document.getElementById("camera3").style.opacity = "0.5";
        document.getElementById("camera4").style.opacity = "0.5";
    }
    function handleClick_camera2() {
        /*Active*/ document.getElementById("camera2").style.opacity = "1";
        /*Inactive*/ document.getElementById("camera1").style.opacity = "0.5";
        document.getElementById("camera3").style.opacity = "0.5";
        document.getElementById("camera4").style.opacity = "0.5";
    }
    function handleClick_camera3() {
        /*Active*/ document.getElementById("camera3").style.opacity = "1";
        /*Inactive*/ document.getElementById("camera1").style.opacity = "0.5";
        document.getElementById("camera2").style.opacity = "0.5";
        document.getElementById("camera4").style.opacity = "0.5";
    }
    function handleClick_camera4() {
        /*Active*/ document.getElementById("camera4").style.opacity = "1";
        /*Inactive*/ document.getElementById("camera1").style.opacity = "0.5";
        document.getElementById("camera2").style.opacity = "0.5";
        document.getElementById("camera3").style.opacity = "0.5";
    }
    const sceneArr = [
        "morningS",
        "nightS",
        "arrivingS",
        "leavingS",
        "defaultS"
    ];
    //Handle Scene Change
    const handleSceneChange = (b)=>{
        const html_id = b.currentTarget.id;
        const element = document.getElementById(html_id);
        if (scene != html_id) {
            setScene(html_id);
            element.style.opacity = "1";
            for(let i = 0; i < sceneArr.length; i++){
                const a = sceneArr[i];
                if (a != html_id) {
                    const b1 = document.getElementById(a);
                    b1.style.opacity = 0.5;
                }
            }
            (0,_util_submit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)("mode", html_id);
        }
    };
    //HTML
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),
        id: "mainContainer",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Smart Home"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Created as part of a final project"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/remotes",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().remotesLink),
                        id: "remotesButton",
                        children: [
                            "Remotes ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("arrow", {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "WELCOME HOME"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().scenesControlPanel),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default().scenesCP),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "scenes"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default().morningCard),
                                id: "morningS",
                                onClick: handleSceneChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default().nightTCard),
                                id: "nightS",
                                onClick: handleSceneChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default().arrivingTCard),
                                id: "arrivingS",
                                onClick: handleSceneChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default().leavingTCard),
                                id: "leavingS",
                                onClick: handleSceneChange
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Scenes_module_css__WEBPACK_IMPORTED_MODULE_10___default().defaultTCard),
                                id: "defaultS",
                                onClick: handleSceneChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().devicesControlPanel),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default().devicesCP),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Devices"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().devicesControlPanelTopRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeviceButton, {
                                        property: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default().hallwayLightsCard),
                                            id: "hallwayLightButton",
                                            sensor_name: "hallway_light",
                                            eid: "name=hallway",
                                            change: hallway
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeviceButton, {
                                        property: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default().livingRoomLightsCard),
                                            id: "livingRoomButton",
                                            sensor_name: "livingroom_light",
                                            eid: "name=living",
                                            change: living
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeviceButton, {
                                        property: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default().diningRoomLightsCard),
                                            id: "diningRoomButton",
                                            sensor_name: "diningroom_light",
                                            eid: "name=dining",
                                            change: dining
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().devicesControlPanelBottomRow),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IRButton, {
                                        property: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default().acCard),
                                            id: "airConditionerButton",
                                            sensor_name: "ac"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IRButton, {
                                        property: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Devices_module_css__WEBPACK_IMPORTED_MODULE_11___default().tvCard),
                                            id: "tvButton",
                                            sensor_name: "tv",
                                            eid: "name=tv",
                                            change: tv
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().sensorReadingsPanel),
                        id: "sensorReadings",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SensorPanel, {
                                name: "Air Quality Index",
                                html_id: "AQI_Sensor",
                                eid: "name=aqi",
                                change: aqi
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SensorPanel, {
                                name: "Temperature",
                                html_id: "Temperature_Sensor",
                                eid: "name=temp",
                                change: temp
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SensorPanel, {
                                name: "Front Door Sensor",
                                html_id: "FrontDoor_Sensor",
                                eid: "name=door",
                                change: door
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SensorPanel, {
                                name: "Kitchen Door Sensor",
                                html_id: "KitchenDoor_Sensor",
                                eid: "name=kitdoor",
                                change: kitdoor
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().cameraPanel),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().camera1Button),
                                id: "camera1",
                                onClick: handleClick_camera1
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().camera2Button),
                                id: "camera2",
                                onClick: handleClick_camera2
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().camera3Button),
                                id: "camera3",
                                onClick: handleClick_camera3
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().camera4Button),
                                id: "camera4",
                                onClick: handleClick_camera4
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Cameras_module_css__WEBPACK_IMPORTED_MODULE_9___default().cameraFeed)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
        ]
    });
};
//(Beginning State) connecting database, ...
async function getServerSideProps() {
    await (0,_util_dbconnect__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    return {
        props: {
            msg: "sucess"
        }
    };
}
//jsx for State section
function SensorPanel({ name , html_id , eid , change  }) {
    const { 0: element , 1: setChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const a = State(eid) //loading at start
    ;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setChange(a);
    }, [
        a
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (change != element && change != "") {
            setChange(change) //change on update
            ;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_sensorReadings_module_scss__WEBPACK_IMPORTED_MODULE_12___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: element
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: " "
            })
        ]
    });
}
//Loading state from FetchState either gotten or error
function State(eid) {
    const { result , isLoading , isError  } = FetchState({
        eid
    });
    if (isLoading) return "Loading...";
    if (isError) return "Error";
    return result[0].state;
}
function DeviceButton(property) {
    var classe = property.property.props;
    var change = classe.change;
    //console.log(classe)
    const { 0: state1 , 1: setChangestate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    function uichange(a) {
        var element = document.getElementById(classe.id);
        if (String(a) == "true") {
            setChangestate("true");
            element.style.opacity = "1";
            return "on";
        }
        if (String(a) == "false") {
            setChangestate("false");
            element.style.opacity = "0.5";
            return "off";
        }
    }
    // const a recieve data on first data fetch from database
    const a = State(classe.eid);
    //console.log('hello ',typeof(a), ' ', a)
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        uichange(a);
    }, [
        a
    ]);
    //change from database updata here
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (change != `${state1}`) {
            uichange(change) //change on update
            ;
        }
    });
    const handleChange = ()=>{
        const stateSubmit = "";
        if (state1 == "true") {
            stateSubmit = uichange("false");
        }
        if (state1 == "false") {
            stateSubmit = uichange("true");
        }
        (0,_util_submit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(classe.sensor_name, stateSubmit);
    };
    //console.log(state1)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classe.className,
        id: classe.id,
        onClick: handleChange
    });
}
function IRButton(property) {
    var classe = property.property.props;
    //console.log(classe)
    const { 0: state1 , 1: setChangestate  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("false");
    function uichange(a) {
        var element = document.getElementById(classe.id);
        if (String(a) == "true") {
            setChangestate("true");
            element.style.opacity = "1";
            return "on";
        }
        if (String(a) == "false") {
            setChangestate("false");
            element.style.opacity = "0.5";
            return "off";
        }
    }
    const handleChange = ()=>{
        const stateSubmit = "";
        if (state1 == "true") {
            stateSubmit = uichange("false");
        }
        if (state1 == "false") {
            stateSubmit = uichange("true");
        }
        (0,_util_submit__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(classe.sensor_name, stateSubmit);
    };
    //console.log(state1)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classe.className,
        id: classe.id,
        onClick: handleChange
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dbconnect)
});

;// CONCATENATED MODULE: external "mongoose"
const external_mongoose_namespaceObject = require("mongoose");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_namespaceObject);
;// CONCATENATED MODULE: ./util/dbconnect.js
/* This is a database connection function*/ 
//import 'dotenv/config' 
const connection = {}; /* creating connection object*/ 
const connectionString = process.env.MONGO_STRING;
async function DbConnect(req, res) {
    /* check if we have connection to our databse*/ if (connection.isConnected) {
        //res.json({msg: 'connected'})
        console.log("connected");
    }
    /* connecting to our database */ const db = await external_mongoose_default().connect(connectionString);
    connection.isConnected = db.connections[0].readyState;
    //res.json({msg: 'connect success'})
    console.log("connect success");
}
/* harmony default export */ const dbconnect = (DbConnect);


/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4612:
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,997], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();