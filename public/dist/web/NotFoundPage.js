(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["NotFoundPage"],{

/***/ "./src/client/components/Status.js":
/*!*****************************************!*\
  !*** ./src/client/components/Status.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\n\nvar Status = function Status(_ref) {\n  var code = _ref.code,\n      children = _ref.children;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    render: function render(_ref2) {\n      var staticContext = _ref2.staticContext;\n      if (staticContext) staticContext.status = code;\n      return children;\n    }\n  });\n};\n\nStatus.propTypes = {\n  code: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Status);\n\n//# sourceURL=webpack:///./src/client/components/Status.js?");

/***/ }),

/***/ "./src/client/pages/NotFoundPage/index.js":
/*!************************************************!*\
  !*** ./src/client/pages/NotFoundPage/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Status */ \"./src/client/components/Status.js\");\n\n\n\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n  var _ref$staticContext = _ref.staticContext,\n      staticContext = _ref$staticContext === void 0 ? {} : _ref$staticContext;\n  staticContext.notFound = true;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Status__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    code: 404\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Sorry, can\\u2019t find that.\")));\n};\n\nNotFoundPage.propTypes = {\n  staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any)\n};\nNotFoundPage.defaultProps = {\n  staticContext: {}\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundPage);\n\n//# sourceURL=webpack:///./src/client/pages/NotFoundPage/index.js?");

/***/ })

}]);