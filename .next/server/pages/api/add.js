"use strict";
(() => {
var exports = {};
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ 9301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6144);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
//import dbConnect from "../../util/dbconnect";


//import stateSchema from "../../model/state"
//const connectionString = process.env.MONGO_STRING
async function Add(req, res) {
    try {
        //console.log('connecting to mongodb');
        //await dbConnect();
        //const db = await mongoose.connect(connectionString);
        //console.log('connected to mongo');
        let Log;
        try {
            Log = mongoose__WEBPACK_IMPORTED_MODULE_1___default().model("Log");
        } catch  {
            Log = mongoose__WEBPACK_IMPORTED_MODULE_1___default().model("Log", _model_log__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
        }
        console.log(req.body);
        console.log("CREATING DOCUMENT");
        const log = await Log.create(req.body);
        console.log("CREATED DOCUMENT");
        res.json({
            log
        });
    //db.disconnect();
    //console.log('mongo disconnected');
    } catch (error) {
        console.log(error);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Add);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9301));
module.exports = __webpack_exports__;

})();