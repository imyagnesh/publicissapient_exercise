"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rootSaga;

var _effects = require("redux-saga/effects");

var _newsSaga = _interopRequireDefault(require("./newsSaga"));

function* rootSaga() {
  yield (0, _effects.all)([(0, _effects.fork)(_newsSaga.default)]);
}