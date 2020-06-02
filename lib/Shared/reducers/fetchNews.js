"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionTypes = require("../constants/actionTypes");

const initialState = {};

var _default = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {
    case `${_actionTypes.FETCH_NEWS}_${_actionTypes.SUCCESS}`:
      return payload;

    default:
      return state;
  }
};

exports.default = _default;