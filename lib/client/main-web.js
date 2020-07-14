"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js");

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _component = require("@loadable/component");

var _App = _interopRequireDefault(require("./App"));

var _createStore = _interopRequireDefault(require("../redux/store/createStore"));

var _Sagas = _interopRequireDefault(require("../redux/Sagas"));

// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = (0, _createStore.default)(preloadedState);
store.runSaga(_Sagas.default);
(0, _component.loadableReady)(() => {
  const root = document.getElementById('main');
  (0, _reactDom.hydrate)( /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_App.default, null))), root);
});