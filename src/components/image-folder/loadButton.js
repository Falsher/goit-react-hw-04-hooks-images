import React, { Component } from 'react';
class LoadButton extends Component {
  static defaultProps = {
    length: 1,
  };
  componentDidMount() {
    if (this.props.length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return (
      <button type="button" className="loadBtn" onSubmit={this.props.onSubmit}>
        Load more
      </button>
    );
  }
}
export default LoadButton;
