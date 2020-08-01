/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { PureComponent } from 'react';

class MyErrorBoundary extends PureComponent {
  state = {
    error: null
  };

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI.
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <p>OOPS! Something went wrong. Please refresh the page or try again later.</p>;
    }
    return this.props.children;
  }
}

export default MyErrorBoundary;
