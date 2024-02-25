import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Vila1 from '../assets/slikeVile/01.jpg';
import Vila2 from '../assets/slikeVile/enterijer-15.jpg';
import Vila3 from '../assets/slikeVile/03.jpg';

const LandingIntro = () => {
  const images = [Vila1, Vila2, Vila3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };

  return (
    <div className='w-full py-[1rem] px-4 lg:py-[2rem]'>
      <p className='text-gray-800 flex justify-center align-middle text-center text-5xl lg:text-7xl LogoFont py-7'>Mesto vašeg odmora</p>  
                  
      <div className='  bg-white mx-auto  my-7 shadow-2xl rounded-md lg:w-[50%]'>
        <Slider {...settings}>
          {images.map((image, index) => (
              <img
                className=' h-[250px]  flex  justify-center items-center mx-auto rounded-md   lg:h-[550px]'
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
