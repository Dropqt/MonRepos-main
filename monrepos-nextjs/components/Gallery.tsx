'use client';

import { useState, useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

const images = [
  '/assets/slikeVile/04.jpg',
  '/assets/slikeVile/05.jpg',
  '/assets/slikeVile/enterijer-3.jpg',
  '/assets/slikeVile/enterijer-4.jpg',
  '/assets/slikeVile/enterijer-5.jpg',
  '/assets/slikeVile/enterijer-6.jpg',
  '/assets/slikeVile/enterijer-7.jpg',
  '/assets/slikeVile/enterijer-10.jpg',
  '/assets/slikeVile/enterijer-13.jpg',
  '/assets/slikeVile/enterijer-14.jpg',
  '/assets/slikeVile/enterijer-15.jpg',
  '/assets/slikeVile/enterijer-20.jpg',
  '/assets/slikeVile/sobe.jpg',
  '/assets/slikeVile/sobe-4.jpg',
  '/assets/slikeVile/sobe-9.jpg',
  '/assets/slikeVile/sobe-10.jpg',
  '/assets/slikeVile/sobe-13.jpg',
  '/assets/slikeVile/sobe-14.jpg',
  '/assets/slikeVile/sobe-16.jpg',
  '/assets/slikeVile/sobe-19.jpg',
  '/assets/slikeVile/sobe-20.jpg',
  '/assets/slikeVile/sobe-22.jpg',
  '/assets/slikeVile/sobe-26.jpg',
  '/assets/slikeVile/sobe-27.jpg',
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isOpen = currentIndex !== null;

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);
  const showNext = () => setCurrentIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  const showPrevious = () => setCurrentIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      showNext();
    } else if (isRightSwipe) {
      showPrevious();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') showPrevious();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, currentIndex]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group bg-gray-200"
            >
              <img
                src={src}
                alt={`Villa photo ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-12 h-12 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeModal}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[currentIndex]}
              alt={`Villa photo ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-all hover:scale-110"
            aria-label="Close"
          >
            <IoClose className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-all hover:scale-110"
            aria-label="Previous"
          >
            <IoChevronBack className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full transition-all hover:scale-110"
            aria-label="Next"
          >
            <IoChevronForward className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 text-white bg-black bg-opacity-60 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Keyboard Hint */}
          <div className="absolute top-6 left-6 px-3 py-2 text-white text-sm bg-black bg-opacity-50 rounded-lg hidden md:block">
            ← → to navigate • ESC to close
          </div>
        </div>
      )}
    </>
  );
}
