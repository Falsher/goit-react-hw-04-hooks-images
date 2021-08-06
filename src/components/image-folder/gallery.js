import React from 'react';

function ImageGalleryItem({ largeImageUrl, openModal, alt, src }) {
  const handleClick = event => {
    openModal(event.target.dataset.largeimage, alt);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="ImageGalleryItem-image"
        data-largeimage={largeImageUrl}
        onClick={handleClick}
      />
    </>
  );
}

export default ImageGalleryItem;
