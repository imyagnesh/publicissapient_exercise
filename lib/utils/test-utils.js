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

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var _reactRedux = require("react-redux");

var _createStore = _interopRequireDefault(require("../redux/store/createStore"));

var _Sagas = _interopRequireDefault(require("../redux/Sagas"));

const reducerInitialState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = (0, _createStore.default)(reducerInitialState);
store.runSaga(_Sagas.default);

function render(ui, { ...renderOptions
} = {}) {
  const Wrapper = ({
    children
  }) => {
    return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
      store: store
    }, children);
  };

  Wrapper.propTypes = {
    children: _propTypes.default.element.isRequired
  };
  return (0, _react2.render)(ui, {
    wrapper: Wrapper,
    ...renderOptions
  });
} // re-export everything