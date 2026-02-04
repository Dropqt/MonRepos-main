'use client';

import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const StickyButtons = () => {
  const phoneNumber = '063/7792-177';
  const emailAddress = 'danica.blagojevic@gmail.com';

  return (
    <div className="fixed bottom-10 right-5 flex flex-col items-end gap-8 z-40">
      <a
        href={`tel:${phoneNumber}`}
        className="bg-gray-200/95 rounded-lg py-2 px-2 text-green-600 hover:text-green-900 transition-colors duration-300 cursor-pointer"
      >
        <FaPhone size={30}/>
      </a>
      <a
        href={`mailto:${emailAddress}`}
        className="bg-gray-200/95 rounded-lg py-2 px-2 text-green-600 hover:text-green-900 transition-colors duration-300 cursor-pointer"
      >
        <FaEnvelope size={30}/>
      </a>
    </div>
  );
};

export default StickyButtons;
