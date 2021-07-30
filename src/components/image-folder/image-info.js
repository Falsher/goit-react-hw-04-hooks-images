import React, { Component } from 'react';
// import LoadButton from './loadButton';
export default class ImageInfo extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.props.imageName}&page=${this.state.page}&per_page=12&key=21857111-8554c096d1798b5dae4546d72`,
      )
        .then(response => response.json())
        .then(image => this.setState({ image }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
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
              <li className="ImageGalleryItem">
                {' '}
                key={hit.id}
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
