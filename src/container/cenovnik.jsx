import React from 'react'
import vaucer from '../assets/other/vaucer.jpg'

const Cenovnik = () => {
  return (
    <div className='mx-auto justify-center text-center '>
        <div className='text-4xl my-8 py-5'>
        <h1 className=' lg:pb-4 border-gray-500 max-w-[1240px] mx-auto'>Cenovnik</h1>
        </div>


        <div className=' '>
            <div className=' mx-5 lg:mx-auto text-justify indent text-lg lg:text-xl font-normal'>

              <p className=''><b>U ovom periodu</b> cena punog pansiona iznosi 3500 din.</p>
              <p className='mb-5'>Kontaktirajte nas radi dogovora.</p>
              <p className=''><b>Popusti za decu</b></p>
              <ul className='pl-2'>
                <li>
                • Do 3 godina ne plaćaju pansion
                </li>
                <li>• 3-7 godina u posebnom ležaju plaćaju 50%</li>
                <li className='mb-5'>• 7-12 godina u posebnom ležaju plaćaju 70%</li>
              </ul>
              <span className=''><b>Dodatne mogućnosti plaćanja</b></span>
              <ul className='pl-2'>
                <li>• Odloženo plaćanje</li>
                <li>• Mogućnost plaćanja preko vaučera uz doplatu.</li>
                <li>• Pio fond</li>
                <li>• Čekovi građana</li>
              </ul>

              
            </div>
        </div>

    </div>
  )
}

export default Cenovnik