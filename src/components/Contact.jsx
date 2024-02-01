import React from 'react';
import ContactForm from './ContactForm';
import IconPhone from '../assets/other/icon-phone.png'

const Contact = () => {
  return (
    <div className=''>
    <div className='w-full max-w-[1240px] items-center mx-auto text-center my-10'>

      <div className='lg:grid lg:grid-cols-2'>
        <div className='text-center pt-5 border-r lg:border-r lg:pb-4 border-gray-500'>
          <p className=' my-7 py-3 text-2xl font-semibold'>Mon Repos Vrelska 4a, 18230 Sokobanja</p>
          <div className='flex flex-col gap-3 text-center'>
            <p className='my-2 px-3 text-xl lg:text-xl'>
               
              <span role='img' aria-label='phone' className='text-blue-500 inline justify-center'><img src={IconPhone} className='w-5 inline-block mx-2 items-center mb-1' alt="" /></span>Danica - <a href='tel:0637792177'>063/7792-177</a> 
            </p>
              <p className='my-2 px-3 text-xl lg:text-xl'>
                <span role='img' aria-label='phone' className='text-blue-500 justify-center'><img src={IconPhone} className='w-5 inline-block mx-2 items-center mb-1' alt="" /></span> Mileta - <a href='tel:063631292'>063/631-292</a>
              </p>
              <p className='my-2 px-3 text-xl lg:text-xl'>
                <span role='img' aria-label='phone' className='text-blue-500'><img src={IconPhone} className='w-5 inline-block mx-2 items-center mb-1' alt="" /></span> <a href='tel:018884760'>018/884-760</a>
              </p>
              <p className='my-2 px-3 text-xl lg:text-xl'>
                <span role='img' aria-label='phone' className='text-blue-500' ><img src={IconPhone} className='w-5 inline-block mx-2 items-center mb-1' alt="" /></span> <a href='tel:018884740'>018/884-740</a>
              </p>
              <p className='my-2 px-3 text-xl lg:text-xl'>
                <span role='img' aria-label='email' className='text-blue-500'>✉️</span> E-mail - <a href='mailto:danica.blagojevic@gmail.com'>danica.blagojevic@gmail.com</a>
              </p>
            </div>
          </div>
          <ContactForm />
        </div>




        <div className=' mt-10 mb-20'>
          <iframe
            className='mx-0 lg:mx-auto my-4 shadow-2xl shadow-green-200 rounded-md lg:w-[1000px] w-[100%]'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.2848639507465!2d21.87014486955873!3d43.64224130103251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47543a4d14cd059f%3A0x53ec847bca4f5f11!2sMonrepos!5e0!3m2!1ssr!2srs!4v1705347358715!5m2!1ssr!2srs"
            width="20" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
