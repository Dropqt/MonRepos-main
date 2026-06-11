'use client';

import { useState, useEffect } from 'react';
import { IoClose, IoChevronBack, IoChevronForward, IoExpand } from 'react-icons/io5';

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

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) showNext();
    else if (distance < -minSwipeDistance) showPrevious();
  };

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-line bg-sand"
              aria-label={`Otvori fotografiju ${index + 1}`}
            >
              <img
                src={src}
                alt={`Vila Mon Repos - fotografija ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-espresso/0 transition-colors duration-300 group-hover:bg-espresso/30" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <IoExpand className="h-9 w-9 text-parchment drop-shadow-lg" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/95"
          onClick={closeModal}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative flex h-full w-full items-center justify-center p-4">
            <img
              src={images[currentIndex]}
              alt={`Vila Mon Repos - fotografija ${currentIndex + 1}`}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <button
            onClick={closeModal}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-parchment/15 text-parchment transition-all hover:scale-110 hover:bg-parchment/25"
            aria-label="Zatvori"
          >
            <IoClose className="h-7 w-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrevious(); }}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-parchment/15 text-parchment transition-all hover:scale-110 hover:bg-parchment/25"
            aria-label="Prethodna"
          >
            <IoChevronBack className="h-7 w-7" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-parchment/15 text-parchment transition-all hover:scale-110 hover:bg-parchment/25"
            aria-label="Sledeća"
          >
            <IoChevronForward className="h-7 w-7" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-espresso/70 px-4 py-2 text-sm text-parchment">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
