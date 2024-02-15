import React, { useState } from 'react';
import CardsPic from '../assets/slikeVile/02 edit.jpg'  
import CardsPic1 from '../assets/slikeVile/terasa-3.jpg'
import CardsPic2 from '../assets/slikeVile/x.jpg'
import { NavLink } from 'react-router-dom';

const Cards = () => {
    const [isExpanded, setIsExpanded] = useState(false);

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
    <div className='w-full py-[3rem]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm' src={CardsPic1} alt="" />

                <div className='text-justify font-medium tracking-tight'>
                    <p className='py-2 border-b text-justify mt-8 '>Dobrodošli u Mon Repos, gde se tradicija i radoznalost stapaju u jedinstveno iskustvo. Na ovom mestu, naš poznati nobelovac - Ivo Andrić je 1952. godine zadovoljavao svoju radoznalost istražujući netaknute predele prirode Sokobanje. Iskusite atmosferu prošlosti i otkrijte nasleđe koje zrači iz svakog ugla naše vile. Mon Repos - pozivamo vas da istražite tradiciju i zadovoljite svoju radoznalost. </p>
                </div>
                <div className='row-span-1 mx-auto'>
                    <button className='h-8 bg-green-600  w-40 my-5 text-lg rounded-md text-gray-100 mx-1'>
                    <NavLink onClick={() => { handleLinkClick(); scrollToTop();  }} to='/galerija' className="text-gray-100 py-2 w-full ">Galerija</NavLink>
                    </button>
                    
                    <button className=' h-8 bg-green-600  w-40 my-5 text-lg rounded-md text-gray-100 lg:hidden mx-1'>
                    <NavLink onClick={() => { handleLinkClick(); scrollToTop();  }} to='/cenovnik' className="text-gray-100 py-2 w-full ">Cenovnik</NavLink>
                    </button>

                </div>
            </div>

            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm' src={CardsPic} alt="" />

                <div className='text-justify font-medium '>
                    <p className='py-2 px-2 border-b text-justify mt-8 tracking-tighter '>Da li žudite za oazom elegancije i opuštanja, gde se prošlost susreće sa savremenim udobnostima?       Smešteno usred netaknute prirode, idealno za prave ljubitelje aktivnog odmora vila Mon Repos je vaše utočište. Doživite vrhunske trenutke dok istražujete staze i biciklističke puteve, otkrivajući tajanstvene pejzaže. Da, Mon Repos je taj jedinstveni kutak gde vaše želje postaju stvarnost.</p>
                </div>
                <div className='row-span-1 mx-auto'>
                <button className='h-8 bg-green-600  w-40 my-5 text-lg rounded-md text-gray-100 mx-1'>
                    <NavLink onClick={() => { handleLinkClick(); scrollToTop();  }} to='/kontakt' className="text-gray-100 py-2 w-full ">Kontakt</NavLink>
                    </button>
                    
                    <button className='h-8 bg-green-600  w-40 my-5 text-lg rounded-md text-gray-100 lg:hidden mx-1'>
                    <NavLink onClick={() => { handleLinkClick(); scrollToTop();  }} to='/galerija' className="text-gray-100 py-2 w-full ">Galerija</NavLink>
                    </button>
                </div>

                
            </div>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4  my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white' >
                <img className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm' src={CardsPic2} alt="" />

                <div className='text-justify tracking-tighter font-medium'>
                    <p className='py-2 px-2 border-b text-justify mt-8 '>Banje omogućavaju odmor i uživanje u prirodnim lepotama. Posle šetnje kroz slikovitu banju, predah možete pronaći u mirnom kutku uz prijatnu kafu. Udaljenost od centra je samo tri minuta hoda, omogućavajući vam laku dostupnost lokalnih atrakcija i restorana. Iskoristite ovu priliku da se relaksirate, povežete sa prirodom i uživate u mirnom ritmu banjskog života.</p>
                </div>
                <div className='row-span-1 mx-auto'>
                <button className='h-8 bg-green-600  w-40 my-5 text-lg rounded-md text-gray-100 mx-1'>
                    <NavLink onClick={() => { handleLinkClick(); scrollToTop();  }} to='/cenovnik' className="text-gray-100 py-2 w-full ">Cenovnik</NavLink>
                    </button>
                    
                    <button className='h-8 bg-green-600  w-40 my-5 text-lg rounded-md text-gray-100 lg:hidden mx-1'>
                    <NavLink onClick={() => { handleLinkClick(); scrollToTop();  }} to='/galerija' className="text-gray-100 py-2 w-full ">Galerija</NavLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards