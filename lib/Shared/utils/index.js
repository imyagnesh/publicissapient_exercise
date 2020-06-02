"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.a = exports.action = void 0;

const action = (type, payload, meta) => ({
  type,
  payload,
  meta
});

exports.action = action;
const a = 'a';
exports.a = a;