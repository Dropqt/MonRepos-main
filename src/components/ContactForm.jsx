import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);    emailjs
      .sendForm(
        'gmail',
        'template_w511hpp',
        e.target,
        'gbYozUxtsoCwsPsHo'
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };  return (
    <div className='my-7 py-3'>
      <h1 className='text-center text-3xl my-4'>Kontaktirajte nas putem forme</h1>
      <form className='rounded-lg flex flex-col items-center  lg:max-w-[1240px] mx-auto px-4' onSubmit={sendEmail}>
        <label>Ime i prezime</label>
        <input className='rounded-lg lg:w-[60%] w-[60%] border-2 px-2 py-1 border-green-700 bg-gray-200' required type="text" name="user_name" />
        <label>Email</label>
        <input className='rounded-lg lg:w-[60%] w-[60%] border-2 px-2 py-1 border-green-700 bg-gray-200 ' required type="email" name="user_email" />
        <label>Poruka</label>
        <textarea className='rounded-lg h-[200px] w-[60%] border-2 px-2  border-green-700 bg-gray-200' name="message" />
        <button className='h-8 bg-green-600 mx-auto w-40 my-5 text-lg rounded-md'><input className='rounded-lg' type="submit" required value="Pošalji" disabled={isSubmitting} /></button>
        {stateMessage && <p>{stateMessage}</p>}
      </form>
    </div>
  );
};
export default ContactForm;