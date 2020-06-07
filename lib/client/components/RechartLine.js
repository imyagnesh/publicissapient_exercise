"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = _interopRequireDefault(require("@loadable/component"));

const Rechart = _component.default.lib({
  resolved: {},

  chunkName() {
    return "recharts";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] === false) {
      return false;
    }

    if (typeof __webpack_modules__ !== 'undefined') {
      return !!__webpack_modules__[key];
    }

    return false;
  },

  importAsync: () => Promise.resolve().then(() => (0, _interopRequireWildcard2.default)(require('recharts'))),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (typeof __webpack_require__ !== 'undefined') {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (require.resolveWeak) {
      return require.resolveWeak("recharts");
    }

    return eval('require.resolve')("recharts");
  }

});

const RechartLine = ({
  newsList,
  xDataKey,
  yDataKey
}) => {
  return /*#__PURE__*/_react.default.createElement(Rechart, null, ({
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    Label,
    ResponsiveContainer
  }) => /*#__PURE__*/_react.default.createElement(ResponsiveContainer, {
    width: "100%",
    height: 300
  }, /*#__PURE__*/_react.default.createElement(LineChart, {
    data: newsList,
    margin: {
      top: 10,
      right: 10,
      left: 20,
      bottom: 100
    }
  }, /*#__PURE__*/_react.default.createElement(CartesianGrid, {
    vertical: false
  }), /*#__PURE__*/_react.default.createElement(XAxis, {
    dataKey: xDataKey,
    angle: -90,
    textAnchor: "end",
    verticalAnchor: "middle"
  }, /*#__PURE__*/_react.default.createElement(Label, {
    value: "ID",
    position: "bottom",
    offset: 50
  })), /*#__PURE__*/_react.default.createElement(YAxis, {
    label: {
      value: 'Votes',
      angle: -90,
      position: 'left'
    }
  }), /*#__PURE__*/_react.default.createElement(Tooltip, null), /*#__PURE__*/_react.default.createElement(Line, {
    dataKey: yDataKey,
    stroke: "#366396",
    strokeWidth: 4,
    dot: {
      strokeWidth: 6,
      r: 3
    }
  }))));
};

RechartLine.propTypes = {
  xDataKey: _propTypes.default.string.isRequired,
  yDataKey: _propTypes.default.string.isRequired,
  newsList: _propTypes.default.arrayOf(_propTypes.default.shape({
    voteCount: _propTypes.default.number,
    objectID: _propTypes.default.string
  })).isRequired
};
var _default = RechartLine;
exports.default = _default;