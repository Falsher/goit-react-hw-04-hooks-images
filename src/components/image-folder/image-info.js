import React, { Component } from 'react';
import ApiImage from './api';
export default class ImageInfo extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
    page: 1,
  };

  fetchImages = () => {
    this.setState({ loading: true });

    ApiImage(this.props.searchQuery, this.state.pageNumber)
      .then(response => response.json())
      .then(image => this.setState({ image }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  hendlePageUp = () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
  };
  render() {
    const { loading, image, error } = this.state;

    return (
      <div>
        <h1>ImageInfo </h1>
        {error && <h1>Картинки {this.props.imageName} нет</h1>}
        {loading && <div>loading...</div>}
        {!this.props.imageName && <div>Введите название картинки</div>}
        {image && (
          <ul className="ImageGallery">
            {image.hits.map(hit => (
              <li className="ImageGalleryItem" key={hit.id}>
                <img
                  alt={hit.user}
                  src={hit.userImageURL}
                  className="ImageGalleryItem-image"
                />
              </li>
            ))}
            <button className="loadBtn" onClick={this.hendlePageUp}>
              Load more
            </button>
          </ul>
        )}
      </div>
    );
  }
}
