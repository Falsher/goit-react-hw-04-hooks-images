import React, { Component } from 'react';
import Modal from './modal';
import Gallery from './gallery';
import './css/gallery.css';
export default class ImageInfo extends Component {
  state = {
    image: null,
    loading: false,
    error: null,
    page: 1,
    showModal: false,
  };
  modalData = {
    src: '',
    alt: '',
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
  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };
  hendlePageUp = () => {
    this.setState(state => ({ page: state.page + 1 }));
    console.log(this.state.page);
  };
  openModal = (src, alt) => {
    this.modalData.src = src;
    this.modalData.alt = alt;
    this.toggleModal();
  };
  render() {
    const { loading, image, error } = this.state;

    return (
      <section>
        <h1>ImageInfo </h1>
        {error && <h1>Картинки {this.props.imageName} нет</h1>}
        {loading && <div>loading...</div>}
        {!this.props.imageName && <div>Введите название картинки</div>}
        {image && (
          <div>
            <ul className="ImageGallery">
              {image.hits.map(hit => {
                return (
                  <li className="ImageGalleryItem" key={hit.id}>
                    <Gallery
                      alt={hit.user}
                      src={hit.previewURL}
                      largeImageUrl={hit.largeImageURL}
                      openModal={this.openModal}
                    />
                  </li>
                );
              })}

              <div>
                {this.state.showModal && (
                  <Modal
                    closeModal={this.toggleModal}
                    href={this.modalData.src}
                    alt={this.modalData.alt}
                  />
                )}
              </div>
            </ul>

            <button className="loadBtn" onClick={this.hendlePageUp}>
              Load more
            </button>
          </div>
        )}
      </section>
    );
  }
}
