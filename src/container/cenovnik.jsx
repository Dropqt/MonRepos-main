import React from 'react'
import vaucer from '../assets/other/vaucer.jpg'

const Cenovnik = () => {
  return (
    <div className='mx-auto justify-center text-center '>
        <div className='text-4xl my-8 py-5'>
        <h1 className='lg:border-b lg:pb-4 border-gray-500 max-w-[1240px] mx-auto'>Cenovnik</h1>
        </div>


        <div className='lg:grid grid-cols-2 lg:text-left '>
            <div className='  mx-auto lg:ml-52'>

              <span className='my-2 px-3 text-xl lg:text-left text-center'>U ovom periodu cena punog pansiona iznosi 3500 din </span>
              <p className='my-2 px-3 text-xl lg:text-left text-center '>Kontaktirajte nas radi dogovora.</p>
              <h2 className='font-bold my-2 px-3 text-2xl text-center '> Popusti za decu</h2>
              <ul className='my-2 px-3 text-base '>
                <li>
                  do 3 godina ne plaćaju pansion.
                </li>
                <li>
                  3-7 godina u posebnom ležaju plaćaju 50%.
                </li>
                <li>7-12 godina u posebnom ležaju plaćaju 70%.</li>
              </ul>
              <p className='font-bold my-2 px-3 text-2xl text-center '>Dodatne mogućnosti plaćanja</p>
              <p className=' '></p>
              <ul className=' my-2 px-3 text-base '>Odloženo plaćanje
                <li className=''>
                  Mogućnost plaćanja preko vaučera uz doplatu.
                </li>
                <li className=''>
                  PIO Fond
                </li>
                <li className=''>
                  Čekovi građana
                </li>
              </ul>
              
            </div>
            <img src={vaucer} alt="Voucher" className=' lg:w-[500px] lg:my-auto  mx-auto md:mx-10 my-10' />
        </div>
      

    </div>
  )
}

export default Cenovnik