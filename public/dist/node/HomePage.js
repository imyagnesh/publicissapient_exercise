exports.ids = ["HomePage"];
exports.modules = {

/***/ "./src/client/assets/icons/arrow_drop_up.svg":
/*!***************************************************!*\
  !*** ./src/client/assets/icons/arrow_drop_up.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  styles = {},\n  ...props\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 24 24\",\n  width: \"18\",\n  height: \"18\"\n}, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n  d: \"M0 0h24v24H0z\",\n  fill: \"none\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n  d: \"M7 14l5-5 5 5z\"\n})));\n\n//# sourceURL=webpack:///./src/client/assets/icons/arrow_drop_up.svg?");

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

/***/ "./src/client/components/Divider/index.js":
/*!************************************************!*\
  !*** ./src/client/components/Divider/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Divider */ \"./src/client/components/Divider/Divider.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Divider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/components/Divider/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NewsDetails_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsDetails.css */ \"./src/client/components/NewsDetails/NewsDetails.css\");\n/* harmony import */ var _NewsDetails_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NewsDetails_css__WEBPACK_IMPORTED_MODULE_3__);\n/* eslint-disable react/jsx-no-undef */\n\n\n\n\n\nconst NewsDetails = ({\n  hit,\n  onHide\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'inline-block'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 title\"\n  }, hit.title), !!hit.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: hit.url,\n    rel: \"noreferrer\",\n    target: \"_blank\",\n    className: \"mr8\"\n  }, `(${hit.url})`) : null, !!hit.author ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 fs1 clrGray\",\n    key: \"0\"\n  }, \"by\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 fs1\",\n    key: \"1\"\n  }, hit.author)] : null, !!hit.created_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"mr8 fs1 clrGray\"\n  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"formatDistance\"])(new Date(hit.created_at), new Date(), {\n    addSuffix: true\n  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    role: \"button\",\n    tabIndex: 0,\n    className: \"btn\",\n    \"aria-label\": `hide hit of ${hit.objectID}`,\n    onKeyDown: () => onHide(hit.objectID),\n    onClick: () => onHide(hit.objectID)\n  }, \"[ hide ]\"));\n};\n\nNewsDetails.propTypes = {\n  hit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    created_at: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    objectID: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  }).isRequired,\n  onHide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsDetails);\n\n//# sourceURL=webpack:///./src/client/components/NewsDetails/NewsDetails.js?");

/***/ }),

/***/ "./src/client/components/NewsDetails/index.js":
/*!****************************************************!*\
  !*** ./src/client/components/NewsDetails/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewsDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsDetails */ \"./src/client/components/NewsDetails/NewsDetails.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _NewsDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/components/NewsDetails/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ResponsiveTable_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponsiveTable.css */ \"./src/client/components/ResponsiveTable/ResponsiveTable.css\");\n/* harmony import */ var _ResponsiveTable_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ResponsiveTable_css__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable react/forbid-prop-types */\n\n\n\n\nconst ResponsiveTable = ({\n  columns,\n  rows\n}) => {\n  const head = () => {\n    const cols = Object.keys(columns).map(key => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        key: key,\n        scope: \"col\",\n        style: columns[key].style\n      }, columns[key].title);\n    });\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, cols);\n  };\n\n  const rws = () => {\n    return rows.map((row, index) => {\n      const values = Object.keys(columns).map(colKey => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          // eslint-disable-next-line react/no-array-index-key\n          key: `${colKey}-${index}`,\n          \"data-label\": columns[colKey].title,\n          style: columns[colKey].rowStyle\n        }, row[colKey]);\n      });\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, values);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"responsive-table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, head()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, rws()));\n};\n\nResponsiveTable.propTypes = {\n  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,\n  rows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResponsiveTable);\n\n//# sourceURL=webpack:///./src/client/components/ResponsiveTable/ResponsiveTable.js?");

/***/ }),

/***/ "./src/client/components/ResponsiveTable/index.js":
/*!********************************************************!*\
  !*** ./src/client/components/ResponsiveTable/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ResponsiveTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveTable */ \"./src/client/components/ResponsiveTable/ResponsiveTable.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _ResponsiveTable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/client/components/ResponsiveTable/index.js?");

/***/ }),

/***/ "./src/client/pages/HomePage/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/HomePage/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/actionTypes */ \"./src/constants/actionTypes.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _components_ResponsiveTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ResponsiveTable */ \"./src/client/components/ResponsiveTable/index.js\");\n/* harmony import */ var _components_NewsDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/NewsDetails */ \"./src/client/components/NewsDetails/index.js\");\n/* harmony import */ var _components_Divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Divider */ \"./src/client/components/Divider/index.js\");\n/* harmony import */ var _assets_icons_arrow_drop_up_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/icons/arrow_drop_up.svg */ \"./src/client/assets/icons/arrow_drop_up.svg\");\n/* eslint-disable react/jsx-no-undef */\n\n\n\n\n\n\n\n\n\n\n\nconst cols = {\n  comments: {\n    title: 'Comments',\n    style: {\n      width: '5%'\n    }\n  },\n  voteCount: {\n    title: 'Vote Count',\n    style: {\n      width: '5%'\n    }\n  },\n  upVote: {\n    title: 'UpVote',\n    style: {\n      width: '5%'\n    }\n  },\n  newsDetails: {\n    title: 'News Details',\n    style: {\n      width: '85%',\n      textAlign: 'left'\n    },\n    rowStyle: {\n      textAlign: 'left'\n    }\n  }\n};\n\nconst HomePage = ({\n  news,\n  loading,\n  loadNews,\n  error,\n  upVote,\n  hideHit,\n  match: {\n    params: {\n      page\n    }\n  },\n  history: {\n    push\n  }\n}) => {\n  const [newsList, setNewsList] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.scrollTo(0, 0);\n    loadNews(page || 1);\n  }, [loadNews, page]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var _news$hits;\n\n    const data = (news === null || news === void 0 ? void 0 : (_news$hits = news.hits) === null || _news$hits === void 0 ? void 0 : _news$hits.reduce((p, c) => {\n      if (!c.hide) {\n        return [...p, {\n          comments: c.num_comments || 0,\n          voteCount: c.points || 0,\n          upVote: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: \"btn\",\n            \"aria-label\": `upVote for ${c.objectID}`,\n            role: \"button\",\n            tabIndex: 0,\n            onKeyDown: () => upVote(c.objectID),\n            onClick: () => upVote(c.objectID)\n          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_assets_icons_arrow_drop_up_svg__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            width: 32,\n            height: 32,\n            fill: \"#979797\"\n          })),\n          newsDetails: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NewsDetails__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            hit: c,\n            onHide: hideHit\n          }),\n          objectID: c.objectID\n        }];\n      }\n\n      return p;\n    }, [])) || [];\n    setNewsList(data);\n  }, [news, hideHit, upVote]);\n\n  const previous = () => {\n    if (page && page !== 1) {\n      push(`/${Number(page) - 1}`);\n    }\n  };\n\n  const next = () => {\n    push(`/${Number(page || 1) + 1}`);\n  };\n\n  const head = () => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__[\"Helmet\"], {\n      key: Math.random()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"Search Heacker News\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      property: \"og:title\",\n      content: \"Search Heacker News\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"description\",\n      content: \"Hacker News Search, millions articles and comments at your fingertips.\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"meta\", {\n      name: \"robots\",\n      content: \"Hacker, News\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"link\", {\n      rel: \"canonical\",\n      href: \"https://hn.algolia.com/\"\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, head(), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Loading....\") : error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, error) : news.hits && news.hits.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"No Records Available\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      background: '#F5F5EF'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ResponsiveTable__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    columns: cols,\n    rows: newsList\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'flex-end',\n      color: '#bf4808',\n      fontWeight: 'bold',\n      fontSize: '1rem',\n      padding: 10\n    }\n  }, page && page !== 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"btn\",\n    \"aria-label\": \"Previous\",\n    role: \"button\",\n    tabIndex: 0,\n    onKeyDown: previous,\n    onClick: previous\n  }, \"Previous\") : null, page && page > 1 && page < news.nbPages - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      margin: '0 5px'\n    }\n  }, \"|\") : null, !page || page < news.nbPages - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"btn\",\n    \"aria-label\": \"Next\",\n    role: \"button\",\n    tabIndex: 0,\n    onKeyDown: next,\n    onClick: next\n  }, \"Next\") : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), newsList.length > 0 ? [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: 10\n    },\n    key: \"0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"ResponsiveContainer\"], {\n    width: \"100%\",\n    height: 300\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"LineChart\"], {\n    data: newsList,\n    margin: {\n      top: 10,\n      right: 10,\n      left: 20,\n      bottom: 100\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"CartesianGrid\"], {\n    vertical: false\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"XAxis\"], {\n    dataKey: \"objectID\",\n    angle: -90,\n    textAnchor: \"end\",\n    verticalAnchor: \"middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"Label\"], {\n    value: \"ID\",\n    position: \"bottom\",\n    offset: 50\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"YAxis\"], {\n    label: {\n      value: 'Votes',\n      angle: -90,\n      position: 'left'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"Tooltip\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_4__[\"Line\"], {\n    dataKey: \"voteCount\",\n    stroke: \"#366396\",\n    strokeWidth: 4,\n    dot: {\n      strokeWidth: 6,\n      r: 3\n    }\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Divider__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    key: \"1\"\n  })] : null));\n};\n\nHomePage.propTypes = {\n  news: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    hits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n    page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n    nbPages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n  }).isRequired,\n  loadNews: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n  }).isRequired,\n  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n  }).isRequired,\n  upVote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  hideHit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\nHomePage.defaultProps = {\n  error: ''\n};\n\nconst mapStateToProps = state => {\n  return {\n    news: state.news,\n    loading: !!state.loading[_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"FETCH_NEWS\"]],\n    error: state.erros[_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"FETCH_NEWS\"]]\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    loadNews: payload => dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"action\"])(`${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"FETCH_NEWS\"]}_${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"REQUEST\"]}`, payload)),\n    upVote: payload => dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"action\"])(`${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"UP_VOTE\"]}_${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"REQUEST\"]}`, payload)),\n    hideHit: payload => dispatch(Object(_utils__WEBPACK_IMPORTED_MODULE_6__[\"action\"])(`${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"HIDE_HIT\"]}_${_constants_actionTypes__WEBPACK_IMPORTED_MODULE_5__[\"REQUEST\"]}`, payload))\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps, mapDispatchToProps)(HomePage));\n\n//# sourceURL=webpack:///./src/client/pages/HomePage/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"action\", function() { return action; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getItem\", function() { return getItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setItem\", function() { return setItem; });\nconst action = (type, payload, meta) => ({\n  type,\n  payload,\n  meta\n});\nconst getItem = key => {\n  const data = localStorage.getItem(key);\n\n  try {\n    return JSON.parse(data);\n  } catch (error) {\n    return data;\n  }\n};\nconst setItem = (key, value) => {\n  localStorage.setItem(key, JSON.stringify(value));\n};\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

};;