"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterConfig = require("react-router-config");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorBoundry = _interopRequireDefault(require("./components/ErrorBoundry"));

var _Header = _interopRequireDefault(require("./components/Header"));

var _Footer = _interopRequireDefault(require("./components/Footer"));

const App = ({
  route
}) => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Header.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_ErrorBoundry.default, null, (0, _reactRouterConfig.renderRoutes)(route.routes))), /*#__PURE__*/_react.default.createElement(_Footer.default, null));
};

App.propTypes = {
  route: _propTypes.default.objectOf(_propTypes.default.any)
};
App.defaultProps = {
  route: null
};
var _default = App;
exports.default = _default;