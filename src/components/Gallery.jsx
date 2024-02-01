import React, { useState } from 'react';
import galleryData from '../data/GalleryImages';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  return (
    <div>
        
        <div className='w-full max-w-[1240px] mx-auto py-5 mb-10 gap-2 lg:columns-4 columns-2 my-10 '>
            {galleryData.map((image) => (
            <img
            className='py-1 rounded-[16px]'
              key={image.id}
              src={image.src}
              alt={'SlikeVile'}
              onClick={() => openModal(image)}
            />
          ))}
        </div>

      {selectedImage && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center overlay'
          onClick={handleOverlayClick}
        >
          <div className='relative max-w-4xl w-full p-5'>
            <img
              src={selectedImage.src}
              alt={``}
              className='max-w-full max-h-[70vh] mx-auto rounded-[16px]'
            />
            <button
              onClick={closeModal}
              className='absolute top-2 right-4 text-red-600 text-2xl cursor-pointer'
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
