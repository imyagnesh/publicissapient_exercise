"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const ArticleDetailModal = props => {
  const {
    handler,
    data
  } = props;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "modal1",
    className: "modal",
    style: {
      zIndex: 1003,
      display: 'block',
      opacity: 1,
      top: 10,
      width: '95vw',
      height: '95vh',
      maxHeight: '95vh'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handler,
    className: "modal-close waves-effect waves-green btn red"
  }, "Close")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("h4", null, data.title), /*#__PURE__*/_react.default.createElement("img", {
    className: "responsive-img",
    src: data.urlToImage,
    alt: data.title
  }), /*#__PURE__*/_react.default.createElement("p", null, data.description), /*#__PURE__*/_react.default.createElement("p", null, data.content), /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "section"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: data.url,
    className: "waves-effect waves-light btn",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Full Article")))), /*#__PURE__*/_react.default.createElement("div", {
    role: "presentation",
    onClick: handler,
    className: "modal-overlay",
    style: {
      zIndex: 1002,
      display: 'block',
      opacity: 0.5
    }
  }));
};

ArticleDetailModal.propTypes = {
  data: _propTypes.default.objectOf(_propTypes.default.any),
  handler: _propTypes.default.func
};
ArticleDetailModal.defaultProps = {
  data: null,
  handler: null
};
var _default = ArticleDetailModal;
exports.default = _default;