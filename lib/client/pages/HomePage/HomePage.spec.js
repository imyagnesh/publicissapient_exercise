"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("../../../utils/test-utils");

var _index = _interopRequireDefault(require("./index"));

test('can render with redux with defaults', () => {
  (0, _testUtils.render)( /*#__PURE__*/_react.default.createElement(_index.default, null));
  expect(_testUtils.screen.asFragment( /*#__PURE__*/_react.default.createElement(_index.default, null))).toMatchSnapshot();
});