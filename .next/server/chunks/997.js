exports.id = 997;
exports.ids = [997];
exports.modules = {

/***/ 1288:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"main_darkened": "Home_main_darkened__5z_MR",
	"title": "Home_title__T09hD",
	"header": "Home_header__GCVRv",
	"scenesControlPanel": "Home_scenesControlPanel__WQ7qr",
	"devicesControlPanel": "Home_devicesControlPanel__kOM64",
	"devicesControlPanelTopRow": "Home_devicesControlPanelTopRow__7oB5d",
	"devicesControlPanelBottomRow": "Home_devicesControlPanelBottomRow__worAU",
	"cameraSection": "Home_cameraSection__Eb2wN",
	"cameraButtonSection": "Home_cameraButtonSection__F9QdH",
	"sensorReadingsPanel": "Home_sensorReadingsPanel__ZrjWg",
	"remotesPanel": "Home_remotesPanel__w_f7U"
};


/***/ }),

/***/ 2305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function submitChange(sensor_name, stateSubmit) {
    //console.log(sensor_name)
    const res = await fetch("/api/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "state": stateSubmit,
            "sensor": sensor_name
        })
    });
    const data = await res.json();
//console.log(data);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (submitChange);


/***/ })

};
;