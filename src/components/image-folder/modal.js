import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './css/modal.css';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className="Modal-backdrop " onClick={this.handleBackdropClick}>
        <div className="Modal-content">
          <img width="400" src={this.props.href} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}
