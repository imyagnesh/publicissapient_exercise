"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _default = () => {
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "page-footer red"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-copyright"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, "\xA9 2019 SSR Daily News - ilker ALTIN", /*#__PURE__*/_react.default.createElement("a", {
    className: "grey-text text-lighten-4 right",
    href: "https://github.com/ilkeraltin/react-ssr-news"
  }, "Source Code"))));
};

exports.default = _default;