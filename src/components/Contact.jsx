import React from 'react'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div className=''>
      <div className='w-full max-w-[1240px] items-center mx-auto text-center'>
        <h1 className='text-4xl my-8 py-5'>Kontakt</h1>
        <div className='lg:grid lg:grid-cols-2'>
          <div className='text-left mx-auto'>
          <p className='my-2 px-2 text-xl font-semibold'>Mon Repos Vrelska 4a, 18230 Sokobanja</p>
          <p className='my-2 px-2 text-lg'>Danica - 063/7792-177</p>
          <p className='my-2 px-2 text-lg'>Mileta - 063/631-292</p>
          <ul className='px-2'>
            <li><span>018/884-760</span></li>
            <li><span>018/884-740</span></li>
          </ul>

          <p className='my-2 px-2'>E-mail - danica.blagojevic@gmail.com</p>
          </div>



          <div className=''>
            <iframe className='mx-0 lg:mx-auto my-4 shadow-2xl shadow-green-200 rounded-md lg:w-[600px] w-[100%]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2848639507465!2d21.87014486955873!3d43.64224130103251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47543a4d14cd059f%3A0x53ec847bca4f5f11!2sMonrepos!5e0!3m2!1ssr!2srs!4v1705347358715!5m2!1ssr!2srs" 
            width="20" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>
      <ContactForm/>
    </div>
    
  )
}


export default Contact