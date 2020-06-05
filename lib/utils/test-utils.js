"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  render: true
};
exports.render = render;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

Object.keys(_react2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _react2[key];
    }
  });
});

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reducers = _interopRequireDefault(require("../redux/reducers"));

/* eslint-disable react/prop-types */

/* eslint-disable no-underscore-dangle */
const reducerInitialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

function render(ui, {
  initialState = reducerInitialState,
  store = (0, _redux.createStore)(_reducers.default, initialState),
  ...renderOptions
} = {}) {
  function Wrapper({
    children
  }) {
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, children);
  }

  return (0, _react2.render)(ui, {
    wrapper: Wrapper,
    ...renderOptions
  });
} // re-export everything