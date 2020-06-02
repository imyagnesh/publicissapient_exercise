"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

/* eslint-disable no-script-url */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
const Header = () => {
  const [menuOpen, setMenuToggle] = (0, _react.useState)(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-fixed"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "red"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-wrapper"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    className: "brand-logo"
  }, "SSR News"), /*#__PURE__*/_react.default.createElement("a", {
    href: "javascript:void(0)",
    onClick: toggleMenu,
    className: "sidenav-trigger right"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "material-icons"
  }, "menu")), /*#__PURE__*/_react.default.createElement("div", {
    className: "sidenav-overlay",
    style: menuOpen ? {
      display: 'block',
      opacity: 1
    } : null,
    onClick: toggleMenu
  }), /*#__PURE__*/_react.default.createElement("ul", {
    id: "slide-out",
    className: "sidenav",
    style: menuOpen ? stylesOpen : null
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "subheader"
  }, "Menu")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "item",
    onClick: toggleMenu
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/techradar",
    className: "item",
    onClick: toggleMenu
  }, "Tech Radar")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/mashable",
    className: "item",
    onClick: toggleMenu
  }, "Mashable")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/the-verge",
    className: "item",
    onClick: toggleMenu
  }, "The Verge")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/the-next-web",
    className: "item",
    onClick: toggleMenu
  }, "TNW")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/wired",
    className: "item",
    onClick: toggleMenu
  }, "Wired")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/recode",
    className: "item",
    onClick: toggleMenu
  }, "Recode"))), /*#__PURE__*/_react.default.createElement("ul", {
    id: "nav-mobile",
    className: "right hide-on-med-and-down"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/techradar",
    className: "item"
  }, "Tech Radar")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/mashable",
    className: "item"
  }, "Mashable")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/the-verge",
    className: "item"
  }, "The Verge")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/the-next-web",
    className: "item"
  }, "TNW")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/wired",
    className: "item"
  }, "Wired")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/articles/recode",
    className: "item"
  }, "Recode")))))));
};

var _default = Header;
exports.default = _default;