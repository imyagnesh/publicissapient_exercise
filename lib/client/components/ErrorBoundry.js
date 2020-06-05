"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

class ErrorBoundary extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo
    }); // You can also log error messages to an error reporting service here
  }

  render() {
    const {
      state
    } = this;
    const {
      children
    } = this.props;

    if (state.errorInfo) {
      // Error path
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h2", null, "Something went wrong."), /*#__PURE__*/_react.default.createElement("details", {
        style: {
          whiteSpace: 'pre-wrap'
        }
      }, state.error && state.error.toString(), /*#__PURE__*/_react.default.createElement("br", null), state.errorInfo.componentStack));
    } // Normally, just render children


    return children;
  }

}

ErrorBoundary.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
};
var _default = ErrorBoundary;
exports.default = _default;