'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import galleryData, { type GalleryImage } from '../data/GalleryImages';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('overlay')) {
      closeModal();
    }
  };

  return (
    <div>
      <div className='w-full max-w-[1240px] mx-auto py-5 mb-10 gap-2 lg:columns-4 columns-2 my-10 '>
        {galleryData.map((image) => (
          <div
            key={image.id}
            className='py-1 cursor-pointer relative'
            onClick={() => openModal(image)}
          >
            <Image
              className='rounded-[16px] w-full h-auto'
              src={image.src}
              alt='Mon Repos Villa'
              width={400}
              height={300}
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center overlay z-50'
          onClick={handleOverlayClick}
        >
          <div className='relative max-w-4xl w-full p-5'>
            <div className='relative w-full max-h-[70vh]'>
              <Image
                src={selectedImage.src}
                alt='Mon Repos Villa'
                width={1200}
                height={800}
                className='rounded-[16px] max-w-full max-h-[70vh] mx-auto object-contain'
              />
            </div>
            <button
              onClick={closeModal}
              className='absolute top-2 right-4 text-red-600 text-2xl cursor-pointer bg-white rounded-full w-8 h-8 flex items-center justify-center'
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
