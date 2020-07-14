"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _errorReducer = _interopRequireDefault(require("./errorReducer"));

var _loadingReducer = _interopRequireDefault(require("./loadingReducer"));

var _fetchNews = _interopRequireDefault(require("./fetchNews"));

var _default = (0, _redux.combineReducers)({
  loading: _loadingReducer.default,
  erros: _errorReducer.default,
  news: _fetchNews.default
});

exports.default = _default;