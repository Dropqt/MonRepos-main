import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Vila1 from '../assets/slikeVile/01.jpg';
import Vila2 from '../assets/slikeVile/02.jpg';
import Vila3 from '../assets/slikeVile/03.jpg';
import './LandingIntro.css'

const LandingIntro = () => {
  const images = [Vila1, Vila2, Vila3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  };

  return (
    <div className='w-full py-[3rem] px-4'>
              <span className=' .alex-brush-regular flex justify-center align-middle text-[3.5em]'>Mon Repos - Mesto vašeg odmora</span>        
      <div className='w-[100%] lg:w-[55%] bg-white mx-auto  my-7 shadow-2xl rounded-md'>
        <Slider {...settings}>
          {images.map((image, index) => (
              <img
                className='flex h-[300px] justify-center items-center mx-auto rounded-md lg:h-[500px]'
                src={image}
                alt={`Slide ${index + 1}`}
              />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingIntro;
