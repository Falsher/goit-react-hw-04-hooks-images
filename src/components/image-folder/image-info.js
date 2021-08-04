import { useEffect, useState } from 'react';
import Modal from './modal';
import Gallery from './gallery';
import './css/gallery.css';
export default function ImageInfo({ imageName }) {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (imageName !== '') {
      setLoading(true);
      fetch(
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${imageName}&page=${page}&per_page=12&key=21857111-8554c096d1798b5dae4546d72`,
      )
        .then(response => response.json())
        .then(image => setImage(prevImage => [...prevImage, ...image.hits]))
        .catch(error => setError)
        .finally(() => setLoading(false));
    }
  }, [image.hits, imageName, page]);
  const hendlePageUp = () => {
    setPage(page + 1);
  };
  const openModal = (src, alt) => {
    setSrc(src);
    setAlt(alt);
    toggleModal();
  };

  return (
    <section>
      <h1>ImageInfo </h1>
      {error && <h1>Картинки {imageName} нет</h1>}
      {loading && <div>loading...</div>}
      {imageName === 0 && <div>Введите название картинки</div>}
      {image.length > 0 && (
        <div>
          <ul className="ImageGallery">
            {image.map(hit => {
              return (
                <li className="ImageGalleryItem" key={hit.id}>
                  <Gallery
                    alt={hit.user}
                    src={hit.previewURL}
                    largeImageUrl={hit.largeImageURL}
                    openModal={openModal}
                  />
                </li>
              );
            })}

            <div>
              {showModal && (
                <Modal closeModal={toggleModal} href={src} alt={alt} />
              )}
            </div>
            <button type="button" className="loadBtn" onClick={hendlePageUp}>
              Load more
            </button>
          </ul>
        </div>
      )}
    </section>
  );
}
