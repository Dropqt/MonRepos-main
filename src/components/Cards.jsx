import React from 'react'
import CardsPic from '../assets/slikeVile/02.jpg'
const Cards = () => {
  return (
    <div className='w-full py-[3rem]  bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white' src={CardsPic} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra, Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white' src={CardsPic} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra, Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra</p>
                </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' >
                <img className='w-50 mx-auto mt-[-3rem] bg-white' src={CardsPic} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra, Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards