"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _component = _interopRequireDefault(require("@loadable/component"));

var _ErrorBoundry = _interopRequireDefault(require("./components/ErrorBoundry"));

require("./main.css");

/* eslint-disable no-underscore-dangle */
const HomePage = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "HomePage";
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

  importAsync: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./pages/HomePage'))),

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
      return require.resolveWeak("./pages/HomePage");
    }

    return eval('require.resolve')("./pages/HomePage");
  }

});
const NotFoundPage = (0, _component.default)({
  resolved: {},

  chunkName() {
    return "NotFoundPage";
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

  importAsync: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('./pages/NotFoundPage'))),

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
      return require.resolveWeak("./pages/NotFoundPage");
    }

    return eval('require.resolve')("./pages/NotFoundPage");
  }

});

const App = () => {
  return /*#__PURE__*/_react.default.createElement(_ErrorBoundry.default, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: HomePage
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFoundPage
  })));
};

var _default = App;
exports.default = _default;