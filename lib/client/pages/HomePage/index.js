"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _HomePage = _interopRequireDefault(require("./HomePage"));

var _actionTypes = require("../../../constants/actionTypes");

var _utils = require("../../../utils");

const mapStateToProps = state => {
  return {
    news: state.news,
    loading: !!state.loading[_actionTypes.FETCH_NEWS],
    error: state.erros[_actionTypes.FETCH_NEWS]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadNews: payload => dispatch((0, _utils.action)(`${_actionTypes.FETCH_NEWS}_${_actionTypes.REQUEST}`, payload)),
    upVote: payload => dispatch((0, _utils.action)(`${_actionTypes.UP_VOTE}_${_actionTypes.REQUEST}`, payload)),
    hideHit: payload => dispatch((0, _utils.action)(`${_actionTypes.HIDE_HIT}_${_actionTypes.REQUEST}`, payload))
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_HomePage.default);

exports.default = _default;