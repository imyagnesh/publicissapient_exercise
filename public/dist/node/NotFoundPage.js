exports.ids = ["NotFoundPage"];
exports.modules = {

/***/ "./src/client/components/Status.js":
/*!*****************************************!*\
  !*** ./src/client/components/Status.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Status = ({\n  code,\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: ({\n      staticContext\n    }) => {\n      if (staticContext) staticContext.status = code;\n      return children;\n    }\n  });\n};\n\nStatus.propTypes = {\n  code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Status);\n\n//# sourceURL=webpack:///./src/client/components/Status.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage/index.js":
/*!************************************************!*\
  !*** ./src/client/pages/NotFoundPage/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Status */ \"./src/client/components/Status.js\");\n\n\n\n\nconst NotFoundPage = ({\n  staticContext = {}\n}) => {\n  staticContext.notFound = true;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Status__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    code: 404\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sorry, can\\u2019t find that.\")));\n};\n\nNotFoundPage.propTypes = {\n  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any)\n};\nNotFoundPage.defaultProps = {\n  staticContext: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundPage);\n\n//# sourceURL=webpack:///./src/client/pages/NotFoundPage/index.js?");

/***/ })

};;