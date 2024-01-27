import React from 'react'
import CardsPic from '../assets/slikeVile/02 edit.jpg'  
import CardsPic1 from '../assets/slikeVile/terasa-3.jpg'
import CardsPic2 from '../assets/slikeVile/x.jpg'
const Cards = () => {
  return (
    <div className='w-full py-[3rem] '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white' src={CardsPic1} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra, Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra</p>
                </div>
            </div>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white' src={CardsPic} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra, Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra</p>
                </div>
            </div>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4  my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white' >
                <img className='w-50 mx-auto mt-[-3rem] bg-white' src={CardsPic2} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra, Odmorite od setnje prelepom banjom uz prijatnu kafu i pogled na prirodu. Na tri minuta hoda do centra</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards