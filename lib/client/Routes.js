"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _NotFoundPage = _interopRequireDefault(require("./pages/NotFoundPage"));

var _Layout = _interopRequireDefault(require("./Layout"));

const HomePage = () => /*#__PURE__*/_react.default.createElement("div", null, "HomePage");

const ArticleListPage = () => /*#__PURE__*/_react.default.createElement("div", null, "Article List Page");

var _default = [{
  component: _Layout.default,
  routes: [{
    path: '/',
    exact: true,
    component: HomePage
  }, {
    path: '/articles/:id',
    component: ArticleListPage
  }, {
    component: _NotFoundPage.default
  }]
}];
exports.default = _default;