"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _effects = require("redux-saga/effects");

var _axios = _interopRequireDefault(require("axios"));

var _utils = require("../utils");

var _actionTypes = require("../constants/actionTypes");

function* fetchNews({
  payload: page
}) {
  try {
    const gstRes = yield (0, _effects.call)(_axios.default.get, `https://hn.algolia.com/api/v1/search?page=${page}`);
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.SUCCESS}`, gstRes.data));
  } catch (error) {
    yield (0, _effects.put)((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.FAIL}`, error));
  }
}

function* fetchNewsRequest() {
  yield (0, _effects.takeLatest)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.REQUEST}`, fetchNews);
}

function* init() {
  yield (0, _effects.all)([(0, _effects.fork)(fetchNewsRequest)]);
}