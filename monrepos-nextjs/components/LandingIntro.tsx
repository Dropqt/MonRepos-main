'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const LandingIntro = () => {
  const images = [
    '/assets/slikeVile/01.jpg',
    '/assets/slikeVile/enterijer-15.jpg',
    '/assets/slikeVile/03.jpg',
  ];

  return (
    <div className='w-full py-[1rem] px-4 lg:py-[2rem]'>
      <p className='text-gray-800 flex justify-center align-middle text-center text-5xl lg:text-7xl LogoFont py-7'>
        Mesto vašeg odmora
      </p>

      <div className='bg-white mx-auto my-7 shadow-2xl rounded-md lg:w-[50%]'>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={500}
          className='rounded-md'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-[250px] lg:h-[550px] w-full'>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className='object-cover rounded-md'
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LandingIntro;
