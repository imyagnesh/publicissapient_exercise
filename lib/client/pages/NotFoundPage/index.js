"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Status = _interopRequireDefault(require("../../components/Status"));

const NotFoundPage = ({
  staticContext = {}
}) => {
  staticContext.notFound = true;
  return /*#__PURE__*/_react.default.createElement(_Status.default, {
    code: 404
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Sorry, can\u2019t find that.")));
};

NotFoundPage.propTypes = {
  staticContext: _propTypes.default.objectOf(_propTypes.default.any)
};
NotFoundPage.defaultProps = {
  staticContext: {}
};
var _default = NotFoundPage;
exports.default = _default;