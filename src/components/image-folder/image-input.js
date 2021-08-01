import React, { Component } from 'react';
import { toast } from 'react-toastify';

class ImageInput extends Component {
  state = {
    inputData: '',
  };
  handleInputChange = event => {
    this.setState({ inputData: event.currentTarget.value.toLowerCase() });
  };
  reset = () => {
    this.setState({ inputData: '' });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputData.trim() === '') {
      toast.error('Введите имя image!');
      return;
    }
    this.props.onSubmit(this.state.inputData);
    this.reset();
  };
  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.inputData}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}
export default ImageInput;
