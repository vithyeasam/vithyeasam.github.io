"use strict";
(() => {
var exports = {};
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ apollo_client)
});

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./pages/api/apollo_client.js


const client = new client_namespaceObject.ApolloClient({
    uri: "http://hr-graph-stage.stage.mediaload.co",
    cache: new client_namespaceObject.InMemoryCache()
});
/* harmony default export */ const apollo_client = (client);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(592));
module.exports = __webpack_exports__;

})();