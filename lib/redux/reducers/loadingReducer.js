"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (state = {}, {
  type
}) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;

  if (requestState === 'REQUEST') {
    return { ...state,
      [requestName]: true
    };
  }

  const {
    [requestName]: data,
    ...rest
  } = state;
  return rest;
};

exports.default = _default;