"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reduxSaga = _interopRequireWildcard(require("redux-saga"));

var _reducers = _interopRequireDefault(require("../reducers"));

const sagaMiddleware = (0, _reduxSaga.default)();
const reduxMiddlewares = [sagaMiddleware];

var _default = preloadedState => {
  const store = (0, _redux.createStore)(_reducers.default, preloadedState, (0, _redux.compose)((0, _redux.applyMiddleware)(...reduxMiddlewares)));
  store.runSaga = sagaMiddleware.run;

  store.close = () => store.dispatch(_reduxSaga.END);

  return store;
};

exports.default = _default;