"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dateFns = require("date-fns");

require("./NewsDetails.css");

/* eslint-disable react/jsx-no-undef */
const NewsDetails = ({
  hit,
  onHide
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'inline-block'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "mr8 title"
  }, hit.title), !!hit.url ? /*#__PURE__*/_react.default.createElement("a", {
    href: hit.url,
    rel: "noreferrer",
    target: "_blank",
    className: "mr8"
  }, `(${hit.url})`) : null, !!hit.author ? [/*#__PURE__*/_react.default.createElement("span", {
    className: "mr8 fs1 clrGray",
    key: "0"
  }, "by"), /*#__PURE__*/_react.default.createElement("span", {
    className: "mr8 fs1",
    key: "1"
  }, hit.author)] : null, !!hit.created_at ? /*#__PURE__*/_react.default.createElement("span", {
    className: "mr8 fs1 clrGray"
  }, (0, _dateFns.formatDistance)(new Date(hit.created_at), new Date(), {
    addSuffix: true
  })) : null, /*#__PURE__*/_react.default.createElement("span", {
    role: "button",
    tabIndex: 0,
    className: "btn",
    "aria-label": `hide hit of ${hit.objectID}`,
    onKeyDown: () => onHide(hit.objectID),
    onClick: () => onHide(hit.objectID)
  }, "[ hide ]"));
};

NewsDetails.propTypes = {
  hit: _propTypes.default.shape({
    title: _propTypes.default.string,
    url: _propTypes.default.string,
    author: _propTypes.default.string,
    created_at: _propTypes.default.string,
    objectID: _propTypes.default.string
  }).isRequired,
  onHide: _propTypes.default.func.isRequired
};
var _default = NewsDetails;
exports.default = _default;