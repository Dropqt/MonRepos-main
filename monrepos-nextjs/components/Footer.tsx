import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-800 mt-auto bottom-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 pl-[90px] md:flex items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="#" className="hover:underline">Mon Repos</a>. Sva prava zadržana
        </span>
        <ul className="flex flex-wrap items-center pl-[30px] mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href='/galerija'>
              <span className='hover:underline me-4 md:me-6'>Galerija</span>
            </Link>
          </li>
          <li>
            <Link href='/kontakt'>
              <span className='hover:underline me-4 md:me-6'>Kontakt</span>
            </Link>
          </li>
          <li>
            <Link href='/cenovnik'>
              <span className='hover:underline me-4 md:me-6'>Cenovnik</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
