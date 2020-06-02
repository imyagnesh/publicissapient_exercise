exports.ids = ["HomePage"];
exports.modules = {

/***/ "./src/Shared/constants/actionTypes.js":
/*!*********************************************!*\
  !*** ./src/Shared/constants/actionTypes.js ***!
  \*********************************************/
/*! exports provided: REQUEST, SUCCESS, FAIL, FETCH_NEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST\", function() { return REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUCCESS\", function() { return SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FAIL\", function() { return FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS\", function() { return FETCH_NEWS; });\nconst REQUEST = 'REQUEST';\nconst SUCCESS = 'SUCCESS';\nconst FAIL = 'FAIL';\nconst FETCH_NEWS = 'FETCH_NEWS';\n\n//# sourceURL=webpack:///./src/Shared/constants/actionTypes.js?");

/***/ }),

/***/ "./src/Shared/utils/index.js":
/*!***********************************!*\
  !*** ./src/Shared/utils/index.js ***!
  \***********************************/
/*! exports provided: action, a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return a; });\nconst action = (type, payload, meta) => ({\n  type,\n  payload,\n  meta\n});\nconst a = 'a';\n\n//# sourceURL=webpack:///./src/Shared/utils/index.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/HomePage/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Shared_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/constants/actionTypes */ \"./src/Shared/constants/actionTypes.js\");\n/* harmony import */ var _Shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Shared/utils */ \"./src/Shared/utils/index.js\");\n/* eslint-disable react/jsx-no-undef */\n\n\n\n\n\n\n\nconst HomePage = ({\n  news,\n  loadNews,\n  loading,\n  error,\n  match: {\n    params: {\n      page\n    }\n  }\n}) => {\n  console.log('news', news);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    loadNews(page || 1);\n  }, [loadNews, page]);\n\n  const head = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], {\n      key: Math.random()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Search Heacker News\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Search Heacker News\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Hacker News Search, millions articles and comments at your fingertips.\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"robots\",\n      content: \"Hacker, News\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n      rel: \"canonical\",\n      href: \"https://hn.algolia.com/\"\n    }));\n  };\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Loading....\");\n  }\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, error);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, head(), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Loading....\") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, \"hello\"));\n};\n\nHomePage.propTypes = {\n  news: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    hits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n    page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired\n  }).isRequired,\n  loadNews: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n  }).isRequired\n};\nHomePage.defaultProps = {\n  error: ''\n};\n\nconst mapStateToProps = state => {\n  return {\n    news: state.news,\n    loading: !!state.loading[_Shared_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__[\"FETCH_NEWS\"]],\n    error: state.erros[_Shared_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__[\"FETCH_NEWS\"]]\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    loadNews: payload => dispatch(Object(_Shared_utils__WEBPACK_IMPORTED_MODULE_5__[\"action\"])(`${_Shared_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__[\"FETCH_NEWS\"]}_${_Shared_constants_actionTypes__WEBPACK_IMPORTED_MODULE_4__[\"REQUEST\"]}`, payload))\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(HomePage));\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/index.js?");

/***/ })

};;