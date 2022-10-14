"use strict";
(() => {
var exports = {};
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

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

/***/ 7937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3911);
/* harmony import */ var _util_dbconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8435);



//find all document in state collection return an array response
const connectionString = process.env.MONGO_STRING;
async function findHandler(req, res) {
    try {
        const query = req.query;
        const { name  } = query;
        //console.log('connecting to mongodb');
        //await dbConnect();
        //mongoose.connect(connectionString);
        //console.log('connected to mongo');
        let State;
        try {
            State = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("State");
        } catch  {
            State = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("State", _model_state__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
        }
        console.log("Reading DOCUMENT");
        const currentState = await State.find({
            "name": name
        });
        //console.log(currentState);
        console.log("Adopt DOCUMENT");
        res.json(currentState);
    } catch (error) {
        res.json(error);
        console.log(error);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findHandler);


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
var __webpack_exports__ = (__webpack_exec__(7937));
module.exports = __webpack_exports__;

})();