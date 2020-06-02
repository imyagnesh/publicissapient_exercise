"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchArticles = exports.FETCH_ARTICLES = void 0;

var _axios = _interopRequireDefault(require("axios"));

const FETCH_ARTICLES = 'fetch_articles';
exports.FETCH_ARTICLES = FETCH_ARTICLES;

const fetchArticles = source => async dispatch => {
  let url;

  if (source) {
    url = `https://newsapi.org/v2/top-headlines`;
  } else {
    url = `https://newsapi.org/v2/top-headlines`;
  }

  const res = await _axios.default.get(url);
  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data.articles
  });
};

exports.fetchArticles = fetchArticles;