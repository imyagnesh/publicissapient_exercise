"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./ResponsiveTable.css");

const ResponsiveTable = ({
  columns,
  rows
}) => {
  const head = () => {
    const cols = Object.keys(columns).map(key => {
      return /*#__PURE__*/_react.default.createElement("th", {
        key: key,
        "data-testid": `th-${key}`,
        scope: "col",
        style: columns[key].style
      }, columns[key].title);
    });
    return /*#__PURE__*/_react.default.createElement("tr", null, cols);
  };

  const rws = () => {
    return rows.map(row => {
      const values = Object.keys(columns).map(colKey => {
        return /*#__PURE__*/_react.default.createElement("td", {
          key: `${colKey}-${row.objectID}`,
          "data-testid": `td-${colKey}-${row.objectID}`,
          "data-label": columns[colKey].title,
          style: columns[colKey].rowStyle
        }, row[colKey]);
      });
      return /*#__PURE__*/_react.default.createElement("tr", {
        key: row.objectID,
        "data-testid": `tr-${row.objectID}`
      }, values);
    });
  };

  return /*#__PURE__*/_react.default.createElement("table", {
    className: "responsive-table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, head()), /*#__PURE__*/_react.default.createElement("tbody", null, rws()));
};

ResponsiveTable.propTypes = {
  columns: _propTypes.default.shape({
    comments: _propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      style: _propTypes.default.object,
      rowStyle: _propTypes.default.object
    }),
    voteCount: _propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      style: _propTypes.default.object,
      rowStyle: _propTypes.default.object
    }),
    upVote: _propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      style: _propTypes.default.object,
      rowStyle: _propTypes.default.object
    }),
    newsDetails: _propTypes.default.shape({
      title: _propTypes.default.string.isRequired,
      style: _propTypes.default.object,
      rowStyle: _propTypes.default.object
    })
  }).isRequired,
  rows: _propTypes.default.arrayOf(_propTypes.default.shape({
    comments: _propTypes.default.number,
    voteCount: _propTypes.default.number,
    upVote: _propTypes.default.element,
    newsDetails: _propTypes.default.element,
    objectID: _propTypes.default.string
  })).isRequired
};
var _default = ResponsiveTable;
exports.default = _default;