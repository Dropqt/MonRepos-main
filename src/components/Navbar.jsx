import React from 'react';
import { NavLink, Nav, NavMenu } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 '>
      <div className='relative'> {/* Zameni za stil ako ne valja, margine za navbar*/}
      <nav className="  rounded-b-xl flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-[#64b370ef] shadow-2xl">
        <div className=" lg:mx-10 mx-1 text-lg lg:text-xl"><NavLink to='/'>Mon Repos</NavLink></div>


        <div className="flex gap-10 pr-20 text-xl text-white font-semibold">
          <NavLink to='/galerija' className="group text-white transition-all duration-300 ease-in-out">
            <span class="bg-left-bottom bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Galerija
            </span>
          </NavLink>
          <NavLink to='/kontakt' className="group text-white transition-all duration-300 ease-in-out" >
            <span class="bg-left-bottom bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Kontakt
            </span>
          </NavLink>
          <NavLink to='/cenovnik'className="group text-white transition-all duration-300 ease-in-out">
            <span class="bg-left-bottom bg-gradient-to-r from-green-700 to-green-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Cenovnik
            </span>
          </NavLink>
        </div>
      </nav>
      </div>
    </header>
  );
};

export default Navbar;
