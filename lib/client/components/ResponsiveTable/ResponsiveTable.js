"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./ResponsiveTable.css");

/* eslint-disable react/forbid-prop-types */
const ResponsiveTable = ({
  columns,
  rows
}) => {
  const head = () => {
    const cols = Object.keys(columns).map(key => {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: key,
        scope: "col",
        style: columns[key].style
      }, columns[key].title);
    });
    return /*#__PURE__*/_react.default.createElement("tr", null, cols);
  };

  const rws = () => {
    return rows.map((row, index) => {
      const values = Object.keys(columns).map(colKey => {
        return /*#__PURE__*/_react.default.createElement("td", {
          // eslint-disable-next-line react/no-array-index-key
          key: `${colKey}-${index}`,
          "data-label": columns[colKey].title,
          style: columns[colKey].rowStyle
        }, row[colKey]);
      });
      return /*#__PURE__*/_react.default.createElement("tr", null, values);
    });
  };

  return /*#__PURE__*/_react.default.createElement("table", {
    className: "responsive-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, head()), /*#__PURE__*/_react.default.createElement("tbody", null, rws()));
};

ResponsiveTable.propTypes = {
  columns: _propTypes.default.object.isRequired,
  rows: _propTypes.default.array.isRequired
};
var _default = ResponsiveTable;
exports.default = _default;