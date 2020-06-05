"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItem = exports.getItem = exports.action = void 0;

const action = (type, payload, meta) => ({
  type,
  payload,
  meta
});

exports.action = action;

const getItem = key => {
  const data = localStorage.getItem(key);

  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};

exports.getItem = getItem;

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

exports.setItem = setItem;