import React, { useState } from 'react'
import ZoomIn from '../hooks/ZoomIn'
import img1 from '../assets/slikeVile/04.jpg'
import img2 from '../assets/slikeVile/05.jpg'
import img3 from '../assets/slikeVile/enterijer-3.jpg'
import img4 from '../assets/slikeVile/enterijer-4.jpg'
import img5 from '../assets/slikeVile/enterijer-5.jpg'
import img6 from '../assets/slikeVile/enterijer-6.jpg'
import img7 from '../assets/slikeVile/enterijer-7.jpg'
import img8 from '../assets/slikeVile/enterijer-8.jpg'
import img9 from '../assets/slikeVile/enterijer-10.jpg'
import img10 from '../assets/slikeVile/enterijer-13.jpg'
import img11 from '../assets/slikeVile/enterijer-14.jpg'
import img12 from '../assets/slikeVile/enterijer-15.jpg'
import img13 from '../assets/slikeVile/enterijer-20.jpg'
import img14 from '../assets/slikeVile/sobe.jpg'
import img15 from '../assets/slikeVile/sobe-4.jpg'
import img16 from '../assets/slikeVile/sobe-9.jpg'
import img17 from '../assets/slikeVile/sobe-10.jpg'
import img18 from '../assets/slikeVile/sobe-13.jpg'
import img19 from '../assets/slikeVile/sobe-14.jpg'
import img20 from '../assets/slikeVile/sobe-16.jpg'
import img21 from '../assets/slikeVile/sobe-19.jpg'
import img22 from '../assets/slikeVile/sobe-20.jpg'
import img23 from '../assets/slikeVile/sobe-22.jpg'
import img24 from '../assets/slikeVile/sobe-26.jpg'
import img25 from '../assets/slikeVile/sobe-27.jpg'


const Gallery = () => {
  const [selectedImage,setSelectedImage]= useState(null);
  const handleImageClick= (image)=>{
    setSelectedImage(image);
  }
  const handleImageCloseZoomIn= () =>{
    setSelectedImage(null)
  }
  const galleryImages= [
    {
      URL:'../assets/slikeVile/04.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-3.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-4.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-5.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-6.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-7.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-10.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-13.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-14.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-15.jpg',
    },
    {
      URL:'../assets/slikeVile/enterijer-20.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-4.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-9.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-10.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-13.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-14.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-16.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-19.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-20.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-22.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-26.jpg',
    },
    {
      URL:'../assets/slikeVile/sobe-27.jpg',
    },

  ]
  return (
    <div>
        <div className='mx-auto max-w-[1240px] items-center '>
            <h1 className='my-8 py-5 text-center  text-4xl'>Galerija</h1>
            <div className='w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 lg:columns-4 columns-2'>
            <img className='mb-1' src={img2} alt="" />
                <img className='mb-1' src={img1} alt="" />
                <img className='mb-1' src={img3} alt="" />
                <img className='mb-1' src={img4} alt="" />
                <img className='mb-1' src={img5} alt="" />
                <img className='mb-1' src={img6} alt="" />
                <img className='mb-1' src={img7} alt="" />
                 
                <img className='mb-1' src={img9} alt="" />
                <img className='mb-1' src={img10} alt="" />
                <img className='mb-1' src={img11} alt="" />
                <img className='mb-1' src={img12} alt="" />
                <img className='mb-1' src={img13} alt="" />
                <img className='mb-1' src={img14} alt="" />
                <img className='mb-1' src={img15} alt="" />
                <img className='mb-1' src={img16} alt="" />
                <img className='mb-1' src={img17} alt="" />
                <img className='mb-1' src={img18} alt="" />
                <img className='mb-1' src={img19} alt="" />
                <img className='mb-1' src={img20} alt="" />
                <img className='mb-1' src={img21} alt="" />
                <img className='mb-1' src={img22} alt="" />
                <img className='mb-1' src={img23} alt="" />
                <img className='mb-1' src={img24} alt="" />
                <img className='mb-1' src={img25} alt="" />
                

            </div>
        </div>
    </div>
  )
}

export default Gallery