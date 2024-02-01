import React from 'react'

const Cenovnik = () => {
  return (
    <div className='mx-auto justify-center text-center '>
        <div className='text-4xl my-8 py-5'>
          <h1 className='lg:border-b lg:pb-4 border-gray-500 max-w-[1240px] mx-auto'>Cenovnik</h1>
        </div>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='mx-auto h-[70vh] '>
              <span>U ovom periodu cena punog pansiona iznosi 3500 din, Kontaktirajte nas radi dogovora.</span>
              <h2 className='font-bold mx-auto '> Popusti za decu</h2>
              <ul>
                <li>
                  do 3 godina ne plaćaju pansion.
                </li>
                <li>
                  3-7 godina u posebnom ležaju plaćaju 50%.
                </li>
                <li>7-12 godina u posebnom ležaju plaćaju 70%</li>
              </ul>
              <p>Mogućnost plaćanja preko vaučera uz doplatu.</p>
              <ul className='font-bold'>Odloženo plaćanje
                <li className='font-normal'>
                  PIO Fond
                </li>
                <li className='font-normal'>
                  Čekovi građana
                </li>
              </ul>
            </div>
            <div className='mx-auto'>
              <h1>test</h1>
            </div>
        </div>
      

    </div>
  )
}

export default Cenovnik