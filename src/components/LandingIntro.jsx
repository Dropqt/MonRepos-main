import React from 'react';
import Vila from '../assets/slikeVile/01.jpg'
const LandingIntro = () => {
  return (
    <div className='w-full py-[3rem] px-4'>
        <div className=' w-[93%]  lg:w-[800px]  bg-white mx-auto flex flex-col my-7'>
            <img className=' flex justify-center items-center mx-auto' src={Vila} alt="Outside_View"  />
            <h1 className='text-black my-3 text-center'>Mesto vaseg odmora</h1>
        </div>
        
    </div>

  )
}

export default LandingIntro;