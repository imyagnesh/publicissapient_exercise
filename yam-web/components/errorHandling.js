/* eslint-disable react/static-property-placement */
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    fallback: PropTypes.element.isRequired,
  };

  constructor(params) {
    super(params);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      return fallback;
    }
    return children;
  }
}
