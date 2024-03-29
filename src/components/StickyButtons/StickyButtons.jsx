import React from 'react';
import './StickyButtons.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import icons from a library like react-icons

const StickyButtons = () => {
  // Add your phone number and email address
  const phoneNumber = '063/7792-177';
  const emailAddress = 'danica.blagojevic@gmail.com';

  return (
    <div className="sticky-buttons ">
    <a href={`tel:${phoneNumber}`} className="phone-button bg-gray-200/95 rounded-lg py-2 px-2">
      <FaPhone size={30}/>
    </a>
    <a href={`mailto:${emailAddress}`} className="mail-button bg-gray-200/95 rounded-lg py-2 px-2">
      <FaEnvelope size={30}/>
    </a>
  </div>
  );
};

export default StickyButtons;