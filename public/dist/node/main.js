module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"NotFoundPage":"NotFoundPage"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/node/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/main-node.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ErrorBoundry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ErrorBoundry */ \"./src/client/components/ErrorBoundry.js\");\n/* harmony import */ var _pages_HomePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/HomePage */ \"./src/client/pages/HomePage/index.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ \"./src/client/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n // const HomePage = loadable(() => import(/* webpackChunkName: 'HomePage' */ './pages/HomePage'));\n\nconst NotFoundPage = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default()({\n  resolved: {},\n\n  chunkName() {\n    return \"NotFoundPage\";\n  },\n\n  isReady(props) {\n    const key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => __webpack_require__.e(/*! import() | NotFoundPage */ \"NotFoundPage\").then(__webpack_require__.bind(null, /*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage/index.js\")),\n\n  requireAsync(props) {\n    const key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(resolved => {\n      this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    const id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! ./pages/NotFoundPage */ \"./src/client/pages/NotFoundPage/index.js\");\n    }\n\n    return eval('require.resolve')(\"./pages/NotFoundPage\");\n  }\n\n});\n\nconst App = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ErrorBoundry__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/:page?\",\n    exact: true,\n    component: _pages_HomePage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: NotFoundPage\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/assets/icons/arrow_drop_up.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/icons/arrow_drop_up.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M0 0h24v24H0z\",\n  fill: \"none\"\n});\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"path\", {\n  d: \"M7 14l5-5 5 5z\"\n});\n\nfunction SvgArrowDropUp(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"svg\", _extends({\n    viewBox: \"0 0 24 24\",\n    width: 18,\n    height: 18\n  }, props), _ref, _ref2);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgArrowDropUp);\n\n//# sourceURL=webpack:///./src/client/assets/icons/arrow_drop_up.svg?");

/***/ }),

/***/ "./src/client/components/Divider/Divider.js":
/*!**************************************************!*\
  !*** ./src/client/components/Divider/Divider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Divider = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      height: 4,\n      backgroundColor: '#EC702D'\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Divider);\n\n//# sourceURL=webpack:///./src/client/components/Divider/Divider.js?");

/***/ }),

/***/ "./src/client/components/ErrorBoundry.js":
/*!***********************************************!*\
  !*** ./src/client/components/ErrorBoundry.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      error: null,\n      errorInfo: null\n    };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    // Catch errors in any components below and re-render with error message\n    this.setState({\n      error,\n      errorInfo\n    }); // You can also log error messages to an error reporting service here\n  }\n\n  render() {\n    const {\n      state\n    } = this;\n    const {\n      children\n    } = this.props;\n\n    if (state.errorInfo) {\n      // Error path\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Something went wrong.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"details\", {\n        style: {\n          whiteSpace: 'pre-wrap'\n        }\n      }, state.error && state.error.toString(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), state.errorInfo.componentStack));\n    } // Normally, just render children\n\n\n    return children;\n  }\n\n}\n\nErrorBoundary.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorBoundary);\n\n//# sourceURL=webpack:///./src/client/components/ErrorBoundry.js?");

/***/ }),

/***/ "./src/client/components/NewsDetails/NewsDetails.css":
/*!***********************************************************!*\
  !*** ./src/client/components/NewsDetails/NewsDetails.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/NewsDetails/NewsDetails.css?");

/***/ }),

/***/ "./src/client/components/NewsDetails/NewsDetails.js":
/*!**********************************************************!*\
  !*** ./src/client/components/NewsDetails/NewsDetails.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NewsDetails_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsDetails.css */ \"./src/client/components/NewsDetails/NewsDetails.css\");\n/* harmony import */ var _NewsDetails_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewsDetails_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst DateFns = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default.a.lib({\n  resolved: {},\n\n  chunkName() {\n    return \"date-fns\";\n  },\n\n  isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! date-fns */ \"date-fns\", 7)),\n\n  requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! date-fns */ \"date-fns\");\n    }\n\n    return eval('require.resolve')(\"date-fns\");\n  }\n\n});\n\nconst NewsDetails = ({\n  hit,\n  onHide\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'inline-block'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 title\"\n  }, hit.title), !!hit.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: hit.url,\n    rel: \"noreferrer\",\n    target: \"_blank\",\n    className: \"mr8\"\n  }, `(${hit.url})`) : null, !!hit.author ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 fs1 clrGray\",\n    key: \"0\"\n  }, \"by\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 fs1\",\n    key: \"1\"\n  }, hit.author)] : null, !!hit.created_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DateFns, null, ({\n    formatDistance\n  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 fs1 clrGray\"\n  }, formatDistance(new Date(hit.created_at), new Date(), {\n    addSuffix: true\n  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    role: \"button\",\n    tabIndex: 0,\n    className: \"btn\",\n    \"aria-label\": `hide hit of ${hit.objectID}`,\n    \"data-testid\": `hideBtn-${hit.objectID}`,\n    onKeyDown: () => onHide(hit.objectID),\n    onClick: () => onHide(hit.objectID)\n  }, \"[ hide ]\"));\n};\n\nNewsDetails.propTypes = {\n  hit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    created_at: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    objectID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  }).isRequired,\n  onHide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsDetails);\n\n//# sourceURL=webpack:///./src/client/components/NewsDetails/NewsDetails.js?");

/***/ }),

/***/ "./src/client/components/RechartLine.js":
/*!**********************************************!*\
  !*** ./src/client/components/RechartLine.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loadable/component */ \"@loadable/component\");\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Rechart = _loadable_component__WEBPACK_IMPORTED_MODULE_2___default.a.lib({\n  resolved: {},\n\n  chunkName() {\n    return \"recharts\";\n  },\n\n  isReady(props) {\n    var key = this.resolve(props);\n\n    if (this.resolved[key] === false) {\n      return false;\n    }\n\n    if (true) {\n      return !!__webpack_require__.m[key];\n    }\n\n    return false;\n  },\n\n  importAsync: () => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! recharts */ \"recharts\", 7)),\n\n  requireAsync(props) {\n    var _this = this;\n\n    var key = this.resolve(props);\n    this.resolved[key] = false;\n    return this.importAsync(props).then(function (resolved) {\n      _this.resolved[key] = true;\n      return resolved;\n    });\n  },\n\n  requireSync(props) {\n    var id = this.resolve(props);\n\n    if (true) {\n      return __webpack_require__(id);\n    }\n\n    return eval('module.require')(id);\n  },\n\n  resolve() {\n    if (true) {\n      return /*require.resolve*/(/*! recharts */ \"recharts\");\n    }\n\n    return eval('require.resolve')(\"recharts\");\n  }\n\n});\n\nconst RechartLine = ({\n  newsList,\n  xDataKey,\n  yDataKey\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rechart, null, ({\n    LineChart,\n    CartesianGrid,\n    XAxis,\n    YAxis,\n    Tooltip,\n    Line,\n    Label,\n    ResponsiveContainer\n  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResponsiveContainer, {\n    width: \"100%\",\n    height: 300\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LineChart, {\n    data: newsList,\n    margin: {\n      top: 10,\n      right: 10,\n      left: 20,\n      bottom: 100\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CartesianGrid, {\n    vertical: false\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(XAxis, {\n    dataKey: xDataKey,\n    angle: -90,\n    textAnchor: \"end\",\n    verticalAnchor: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Label, {\n    value: \"ID\",\n    position: \"bottom\",\n    offset: 50\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(YAxis, {\n    label: {\n      value: 'Votes',\n      angle: -90,\n      position: 'left'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tooltip, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Line, {\n    dataKey: yDataKey,\n    stroke: \"#366396\",\n    strokeWidth: 4,\n    dot: {\n      strokeWidth: 6,\n      r: 3\n    }\n  }))));\n};\n\nRechartLine.propTypes = {\n  xDataKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  yDataKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  newsList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    voteCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n    objectID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RechartLine);\n\n//# sourceURL=webpack:///./src/client/components/RechartLine.js?");

/***/ }),

/***/ "./src/client/components/ResponsiveTable/ResponsiveTable.css":
/*!*******************************************************************!*\
  !*** ./src/client/components/ResponsiveTable/ResponsiveTable.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/ResponsiveTable/ResponsiveTable.css?");

/***/ }),

/***/ "./src/client/components/ResponsiveTable/ResponsiveTable.js":
/*!******************************************************************!*\
  !*** ./src/client/components/ResponsiveTable/ResponsiveTable.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ResponsiveTable_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsiveTable.css */ \"./src/client/components/ResponsiveTable/ResponsiveTable.css\");\n/* harmony import */ var _ResponsiveTable_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ResponsiveTable_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst ResponsiveTable = ({\n  columns,\n  rows\n}) => {\n  const head = () => {\n    const cols = Object.keys(columns).map(key => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        key: key,\n        \"data-testid\": `th-${key}`,\n        scope: \"col\",\n        style: columns[key].style\n      }, columns[key].title);\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, cols);\n  };\n\n  const rws = () => {\n    return rows.map(row => {\n      const values = Object.keys(columns).map(colKey => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          key: `${colKey}-${row.objectID}`,\n          \"data-testid\": `td-${colKey}-${row.objectID}`,\n          \"data-label\": columns[colKey].title,\n          style: columns[colKey].rowStyle\n        }, row[colKey]);\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        key: row.objectID,\n        \"data-testid\": `tr-${row.objectID}`\n      }, values);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"responsive-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, head()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, rws()));\n};\n\nResponsiveTable.propTypes = {\n  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n      rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n    }),\n    voteCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n      rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n    }),\n    upVote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n      rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n    }),\n    newsDetails: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n      rowStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n    })\n  }).isRequired,\n  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n    voteCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n    upVote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,\n    newsDetails: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,\n    objectID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResponsiveTable);\n\n//# sourceURL=webpack:///./src/client/components/ResponsiveTable/ResponsiveTable.js?");

/***/ }),

/***/ "./src/client/main-node.js":
/*!*********************************!*\
  !*** ./src/client/main-node.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/client/App.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./src/client/main-node.js?");

/***/ }),

/***/ "./src/client/main.css":
/*!*****************************!*\
  !*** ./src/client/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/main.css?");

/***/ }),

/***/ "./src/client/pages/HomePage/HomePage.css":
/*!************************************************!*\
  !*** ./src/client/pages/HomePage/HomePage.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/HomePage.css?");

/***/ }),

/***/ "./src/client/pages/HomePage/HomePage.js":
/*!***********************************************!*\
  !*** ./src/client/pages/HomePage/HomePage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ResponsiveTable_ResponsiveTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ResponsiveTable/ResponsiveTable */ \"./src/client/components/ResponsiveTable/ResponsiveTable.js\");\n/* harmony import */ var _components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Divider/Divider */ \"./src/client/components/Divider/Divider.js\");\n/* harmony import */ var _components_RechartLine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/RechartLine */ \"./src/client/components/RechartLine.js\");\n/* harmony import */ var _useNewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useNewsList */ \"./src/client/pages/HomePage/useNewsList.js\");\n/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HomePage.css */ \"./src/client/pages/HomePage/HomePage.css\");\n/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HomePage_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst cols = {\n  comments: {\n    title: 'Comments',\n    style: {\n      width: '5%'\n    }\n  },\n  voteCount: {\n    title: 'Vote Count',\n    style: {\n      width: '5%'\n    }\n  },\n  upVote: {\n    title: 'UpVote',\n    style: {\n      width: '5%'\n    }\n  },\n  newsDetails: {\n    title: 'News Details',\n    style: {\n      width: '85%',\n      textAlign: 'left'\n    },\n    rowStyle: {\n      textAlign: 'left'\n    }\n  }\n};\n\nconst HomePage = ({\n  news,\n  loading,\n  loadNews,\n  error,\n  upVote,\n  hideHit,\n  match: {\n    params: {\n      page\n    }\n  },\n  history: {\n    push\n  }\n}) => {\n  const {\n    newsList\n  } = Object(_useNewsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n    news,\n    upVote,\n    hideHit\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.scrollTo(0, 0);\n    loadNews(page || 1);\n  }, [loadNews, page]);\n\n  const previous = () => {\n    if (page && page !== 1) {\n      const prevPage = Number(page) - 1;\n      push(`/${prevPage === 1 ? '' : prevPage}`);\n    }\n  };\n\n  const next = () => {\n    push(`/${Number(page || 1) + 1}`);\n  };\n\n  const head = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], {\n      key: Math.random()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Search Heacker News\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Search Heacker News\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Hacker News Search, millions articles and comments at your fingertips.\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"robots\",\n      content: \"Hacker, News\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n      rel: \"canonical\",\n      href: \"https://hn.algolia.com/\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, head(), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    \"data-testid\": \"h2loading\"\n  }, \"Loading....\") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    \"data-testid\": \"h2error\"\n  }, error) : news.hits && news.hits.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", {\n    \"data-testid\": \"norecords\"\n  }, \"No Records Available\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      background: '#F5F5EF'\n    },\n    \"data-testid\": \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResponsiveTable_ResponsiveTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    columns: cols,\n    rows: newsList,\n    \"data-testid\": \"responsiveable\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'flex-end',\n      color: '#bf4808',\n      fontWeight: 'bold',\n      fontSize: '1rem',\n      padding: 10\n    }\n  }, page && page !== 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"btn\",\n    \"aria-label\": \"Previous\",\n    role: \"button\",\n    tabIndex: 0,\n    onKeyDown: previous,\n    onClick: previous,\n    \"data-testid\": \"previousbtn\"\n  }, \"Previous\") : null, page && page > 1 && page < news.nbPages - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      margin: '0 5px'\n    }\n  }, \"|\") : null, !page || page < news.nbPages - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"btn\",\n    \"aria-label\": \"Next\",\n    role: \"button\",\n    tabIndex: 0,\n    onKeyDown: next,\n    onClick: next,\n    \"data-testid\": \"nextbtn\"\n  }, \"Next\") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), newsList.length > 0 ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: 10\n    },\n    key: \"0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_RechartLine__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    newsList: newsList,\n    xDataKey: \"objectID\",\n    yDataKey: \"voteCount\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Divider_Divider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    key: \"1\"\n  })] : null));\n};\n\nHomePage.propTypes = {\n  news: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    hits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n    page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n    nbPages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }).isRequired,\n  loadNews: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n  }).isRequired,\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n  }).isRequired,\n  upVote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  hideHit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\nHomePage.defaultProps = {\n  error: ''\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/HomePage/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage */ \"./src/client/pages/HomePage/HomePage.js\");\n/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/actionTypes */ \"./src/constants/actionTypes.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n\n\n\n\n\nconst mapStateToProps = state => {\n  return {\n    news: state.news,\n    loading: !!state.loading[_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_NEWS\"]],\n    error: state.erros[_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_NEWS\"]]\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    loadNews: payload => dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"action\"])(`${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"FETCH_NEWS\"]}_${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"REQUEST\"]}`, payload)),\n    upVote: payload => dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"action\"])(`${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"UP_VOTE\"]}_${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"REQUEST\"]}`, payload)),\n    hideHit: payload => dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_3__[\"action\"])(`${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"HIDE_HIT\"]}_${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_2__[\"REQUEST\"]}`, payload))\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mapStateToProps, mapDispatchToProps)(_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/index.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/useNewsList.js":
/*!**************************************************!*\
  !*** ./src/client/pages/HomePage/useNewsList.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewsDetails_NewsDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NewsDetails/NewsDetails */ \"./src/client/components/NewsDetails/NewsDetails.js\");\n/* harmony import */ var _assets_icons_arrow_drop_up_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/arrow_drop_up.svg */ \"./src/client/assets/icons/arrow_drop_up.svg\");\n\n\n\n\nconst useNewsList = ({\n  news,\n  hideHit,\n  upVote\n}) => {\n  const [newsList, setNewsList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var _news$hits;\n\n    const data = (news === null || news === void 0 ? void 0 : (_news$hits = news.hits) === null || _news$hits === void 0 ? void 0 : _news$hits.reduce((p, c) => {\n      if (!c.hide) {\n        return [...p, {\n          comments: c.num_comments || 0,\n          voteCount: c.points || 0,\n          upVote: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: \"btn\",\n            \"aria-label\": `upVote for ${c.objectID}`,\n            role: \"button\",\n            tabIndex: 0,\n            \"data-testid\": `upvote-${c.objectID}`,\n            onKeyDown: () => upVote(c.objectID),\n            onClick: () => upVote(c.objectID)\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_arrow_drop_up_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            width: 32,\n            height: 32,\n            fill: \"#979797\"\n          })),\n          newsDetails: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsDetails_NewsDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            hit: c,\n            onHide: hideHit,\n            \"data-testid\": `newsDetails-${c.objectID}`\n          }),\n          objectID: c.objectID\n        }];\n      }\n\n      return p;\n    }, [])) || [];\n    setNewsList(data);\n  }, [news, hideHit, upVote]);\n  return {\n    newsList\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useNewsList);\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/useNewsList.js?");

/***/ }),

/***/ "./src/constants/actionTypes.js":
/*!**************************************!*\
  !*** ./src/constants/actionTypes.js ***!
  \**************************************/
/*! exports provided: REQUEST, SUCCESS, FAIL, FETCH_NEWS, UP_VOTE, HIDE_HIT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REQUEST\", function() { return REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SUCCESS\", function() { return SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FAIL\", function() { return FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWS\", function() { return FETCH_NEWS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UP_VOTE\", function() { return UP_VOTE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDE_HIT\", function() { return HIDE_HIT; });\nconst REQUEST = 'REQUEST';\nconst SUCCESS = 'SUCCESS';\nconst FAIL = 'FAIL';\nconst FETCH_NEWS = 'FETCH_NEWS';\nconst UP_VOTE = 'UP_VOTE';\nconst HIDE_HIT = 'HIDE_HIT';\n\n//# sourceURL=webpack:///./src/constants/actionTypes.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: action, getItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItem\", function() { return getItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItem\", function() { return setItem; });\nconst action = (type, payload, meta) => ({\n  type,\n  payload,\n  meta\n});\nconst getItem = key => {\n  const data = localStorage.getItem(key);\n  return JSON.parse(data);\n};\nconst setItem = (key, value) => {\n  localStorage.setItem(key, JSON.stringify(value));\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@loadable/component\");\n\n//# sourceURL=webpack:///external_%22@loadable/component%22?");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns\");\n\n//# sourceURL=webpack:///external_%22date-fns%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recharts\");\n\n//# sourceURL=webpack:///external_%22recharts%22?");

/***/ })

/******/ });