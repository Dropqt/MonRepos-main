import React from 'react';
import Vila from '../assets/slikeVile/01.jpg'
const LandingIntro = () => {
  return (
    <div  className='w-full py-[3rem] px-4'>
        <div className=' w-[100%]  lg:w-[800px]  bg-white mx-auto flex flex-col my-7 shadow-2xl rounded-md'>
            <img className=' flex justify-center items-center mx-auto rounded-md' src={Vila} alt="Outside_View"  />
            <h1 className='text-black my-3 text-center text-3xl'>Mesto vašeg odmora</h1>
        </div>
    </div>

  )
}

export default LandingIntro;