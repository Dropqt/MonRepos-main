'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className='sticky top-0 z-50 '>
      <div className='relative'>
        <nav className="rounded-b-xl flex flex-col lg:flex-row justify-between items-center max-w-[1240px] h-auto lg:h-24 mx-auto px-4 text-black bg-[#64b370ef] shadow-2xl ">
          <div className="text-gray-800 lg:mx-10 mx-1 text-3xl lg:text-4xl LogoFont my-3">
            <Link
              href='/'
              onClick={() => { handleLinkClick(); scrollToTop(); }}
            >
              Mon Repos
            </Link>
          </div>

          <div className="lg:hidden flex flex-col items-center ">
            <button
              onClick={handleToggle}
              className="text-white text-xl focus:outline-none"
            >
              &#9776;
            </button>
            {isExpanded && (
              <div className="sticky flex flex-col items-center w-full mt-2 text-center ">
                <Link
                  href='/galerija'
                  onClick={() => { handleLinkClick(); scrollToTop(); }}
                  className="text-gray-800 py-2 w-full hover:bg-gray-200"
                >
                  Galerija
                </Link>
                <Link
                  href='/kontakt'
                  onClick={() => { handleLinkClick(); scrollToTop(); }}
                  className="text-gray-800 py-2 w-full hover:bg-gray-200"
                >
                  Kontakt
                </Link>
                <Link
                  href='/cenovnik'
                  onClick={() => { handleLinkClick(); scrollToTop(); }}
                  className="text-gray-800 py-2 w-full hover:bg-gray-200"
                >
                  Cenovnik
                </Link>
              </div>
            )}
          </div>

          <div className="hidden lg:flex flex-col lg:flex-row gap-10 pr-20 text-xl text-white font-semibold">
            <Link
              href='/galerija'
              onClick={() => {scrollToTop();handleLinkClick();}}
              className="group text-white transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Galerija
              </span>
            </Link>

            <Link
              href='/kontakt'
              onClick={() => {handleLinkClick();scrollToTop();}}
              className="group text-white transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Kontakt
              </span>
            </Link>

            <Link
              href='/cenovnik'
              onClick={() => {scrollToTop();handleLinkClick();}}
              className="group text-white transition-all duration-300 ease-in-out"
            >
              <span className="bg-left-bottom bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Cenovnik
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
