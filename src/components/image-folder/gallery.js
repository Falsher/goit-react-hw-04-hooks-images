import { Component } from 'react';

class ImageGalleryItem extends Component {
  handleClick = event => {
    this.props.openModal(event.target.dataset.largeimage, this.props.alt);
  };

  render() {
    return (
      <>
        <img
          src={this.props.src}
          alt={this.props.alt}
          className="ImageGalleryItem-image"
          data-largeimage={this.props.largeImageUrl}
          onClick={this.handleClick}
        />
      </>
    );
  }
}

export default ImageGalleryItem;
