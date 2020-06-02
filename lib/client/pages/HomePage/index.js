"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = require("react-helmet");

var _reactRedux = require("react-redux");

var _actionTypes = require("../../../Shared/constants/actionTypes");

var _utils = require("../../../Shared/utils");

/* eslint-disable react/forbid-prop-types */

/* eslint-disable no-script-url */

/* eslint-disable jsx-a11y/anchor-is-valid */
const HomePage = ({
  news,
  loadNews,
  loading
}) => {
  console.log('HomePage -> loading', loading);
  console.log('HomePage -> news', news);
  (0, _react.useEffect)(() => {
    loadNews(1);
  }, [loadNews]);

  const head = () => {
    return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, {
      key: Math.random()
    }, /*#__PURE__*/_react.default.createElement("title", null, "Search Heacker News"), /*#__PURE__*/_react.default.createElement("meta", {
      property: "og:title",
      content: "Search Heacker News"
    }), /*#__PURE__*/_react.default.createElement("meta", {
      name: "description",
      content: "Hacker News Search, millions articles and comments at your fingertips."
    }), /*#__PURE__*/_react.default.createElement("meta", {
      name: "robots",
      content: "Hacker, News"
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: "https://hn.algolia.com/"
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", null, head(), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Popular Articles")), /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  })));
};

HomePage.propTypes = {
  news: _propTypes.default.object.isRequired,
  loadNews: _propTypes.default.func.isRequired,
  loading: _propTypes.default.bool.isRequired
};

const mapStateToProps = state => {
  return {
    news: state.news,
    loading: !!state.loading[_actionTypes.FETCH_NEWS],
    error: state.erros[_actionTypes.FETCH_NEWS]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNews: payload => dispatch((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.REQUEST}`, payload))
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(HomePage);

exports.default = _default;