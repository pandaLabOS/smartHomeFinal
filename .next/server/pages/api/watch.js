"use strict";
(() => {
var exports = {};
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9505:
/***/ ((module) => {

module.exports = import("socket.io");;

/***/ }),

/***/ 3911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const stateSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: String,
    state: String
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stateSchema);


/***/ }),

/***/ 832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_dbconnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8435);
/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3911);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io__WEBPACK_IMPORTED_MODULE_3__]);
socket_io__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function Watch(req, res) {
    try {
        console.log("connecting to mongodb");
        //await dbConnect();
        console.log("connected to mongo");
        let State;
        try {
            State = mongoose__WEBPACK_IMPORTED_MODULE_2___default().model("State");
        } catch  {
            State = mongoose__WEBPACK_IMPORTED_MODULE_2___default().model("State", _model_state__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
        }
        const changeStream = State.watch();
        changeStream.on("change", async (change)=>{
            try {
                //console.log(change);
                const result = change;
                console.log(result);
                res.status(200).json(result);
            } catch (error) {
                throw error;
            }
        });
    } catch (error) {
        console.log(error);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Watch);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8435:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* This is a database connection function*/ 
//import 'dotenv/config' 
const connection = {}; /* creating connection object*/ 
const connectionString = process.env.MONGO_STRING;
async function DbConnect(req, res) {
    /* check if we have connection to our databse*/ if (connection.isConnected) {
        //res.json({msg: 'connected'})
        console.log("connected");
    }
    /* connecting to our database */ const db = await mongoose.connect(connectionString);
    connection.isConnected = db.connections[0].readyState;
    //res.json({msg: 'connect success'})
    console.log("connect success");
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DbConnect)));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(832));
module.exports = __webpack_exports__;

})();