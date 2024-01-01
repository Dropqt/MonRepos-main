import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-[#395905]'> {/* Zameni za stil ako ne valja, margine za navbar*/}
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black bg-[#7AD42B]">
            <div className="font-bold">Mon Repos</div>
      <div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-6">
          Galerija
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Kontakt
        </button>
      </div>
    </nav>
    </div>

  );
};

export default Navbar;
