"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRouterDom = require("react-router-dom");

const Status = ({
  code,
  children
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    render: ({
      staticContext
    }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }
  });
};

Status.propTypes = {
  code: _propTypes.default.number.isRequired,
  children: _propTypes.default.element.isRequired
};
var _default = Status;
exports.default = _default;