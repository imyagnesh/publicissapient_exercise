"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = _interopRequireDefault(require("@loadable/component"));

require("./NewsDetails.css");

const DateFns = _component.default.lib({
  resolved: {},

  chunkName() {
    return "date-fns";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('date-fns'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("date-fns");
    }

    return eval('require.resolve')("date-fns");
  }

});

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
  }, hit.author)] : null, !!hit.created_at ? /*#__PURE__*/_react.default.createElement(DateFns, null, ({
    formatDistance
  }) => /*#__PURE__*/_react.default.createElement("span", {
    className: "mr8 fs1 clrGray"
  }, formatDistance(new Date(hit.created_at), new Date(), {
    addSuffix: true
  }))) : null, /*#__PURE__*/_react.default.createElement("span", {
    role: "button",
    tabIndex: 0,
    className: "btn",
    "aria-label": `hide hit of ${hit.objectID}`,
    "data-testid": `hideBtn-${hit.objectID}`,
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