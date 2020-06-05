"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ErrorBoundry = _interopRequireDefault(require("./components/ErrorBoundry"));

var _HomePage = _interopRequireDefault(require("./pages/HomePage"));

require("./main.css");

/* eslint-disable no-underscore-dangle */
// import loadable from '@loadable/component';
// const HomePage = loadable(() => import(/* webpackChunkName: 'HomePage' */ './pages/HomePage'));
// const NotFoundPage = loadable(() =>
//   import(/* webpackChunkName: 'NotFoundPage' */ './pages/NotFoundPage'),
// );
const App = () => {
  return /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement(_ErrorBoundry.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/:page?",
    exact: true,
    component: _HomePage.default
  }))));
};

var _default = App;
exports.default = _default;