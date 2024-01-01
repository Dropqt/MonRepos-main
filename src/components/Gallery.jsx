import React from 'react'
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

const Gallery = () => {
  return (
    <div>
        <div className='mx-auto max-w-[1240px] items-center text-center py-3 text-4xl'>
            <h1>Galerija</h1>
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

            </div>
        </div>
    </div>
  )
}

export default Gallery