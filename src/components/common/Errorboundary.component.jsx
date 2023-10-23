import { Component } from "react";
import { useErrorCatch } from "../../hooks/useErrorCatch";

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
    return { hasError: true, error };
  }

  render() {
    const ErrorComponent = useErrorCatch(this.state.error);
    if (this.state.hasError) {
      return ErrorComponent;
    }

    return this.props.children;
  }
}
