import { Component } from "react";

/**
 * @param {React.Component} props.children
 * @returns {React.Component}
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Error</h1>;
    }

    return this.props.children;
  }
}
