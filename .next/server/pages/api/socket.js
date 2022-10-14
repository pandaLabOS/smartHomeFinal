"use strict";
(() => {
var exports = {};
exports.id = 31;
exports.ids = [31];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9505:
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ 6144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const logSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    state: String,
    sensor: String
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logSchema);


/***/ }),

/***/ 7454:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9505);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6144);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_0__]);
socket_io__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SocketHandler = async (req, res)=>{
    if (res.socket.server.io) {
        console.log("Socket is already running");
    } else {
        //console.log('connecting to mongodb');
        //await dbConnect();
        //console.log('connected to mongo');
        let State;
        try {
            State = mongoose__WEBPACK_IMPORTED_MODULE_1___default().model("State");
        } catch  {
            State = mongoose__WEBPACK_IMPORTED_MODULE_1___default().model("State", _model_log__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
        }
        console.log("Socket is initializing");
        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(res.socket.server);
        res.socket.server.io = io;
        io.on("connection", (socket)=>{
            console.log(socket.id);
        });
        const changeStream = State.watch();
        changeStream.on("change", async (change)=>{
            try {
                //console.log(change);
                var check = checkObjectID(String(change.documentKey._id));
                var result = {
                    sensor: check,
                    state: change.updateDescription.updatedFields.state
                };
                //console.log(result.id)
                io.emit("changeData", result);
            } catch (error) {
                throw error;
            }
        });
    }
    res.end();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketHandler);
function checkObjectID(result) {
    switch(result){
        case process.env.CO2_OBJECTID:
            return "co2";
        case process.env.TEMP_OBJECTID:
            return "temp";
        case process.env.HUMID_OBJECTID:
            return "humid";
        case process.env.DOOR_OBJECTID:
            return "door";
        case process.env.KIT_OBJECTID:
            return "kitdoor";
        case process.env.HALLWAY_OBJECTID:
            return "hallway";
        case process.env.LIVING_OBJECTID:
            return "living";
        case process.env.DINING_OBJECTID:
            return "dining";
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7454));
module.exports = __webpack_exports__;

})();