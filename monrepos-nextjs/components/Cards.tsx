'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cards = () => {
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
          <Image
            className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm'
            src="/assets/slikeVile/terasa-3.jpg"
            alt="Mon Repos terasa"
            width={400}
            height={300}
          />

          <div className='text-justify font-medium tracking-tight'>
            <p className='py-2 border-b text-justify mt-8 '>
              Dobrodošli u Mon Repos, gde se tradicija i radoznalost stapaju u jedinstveno iskustvo. Na ovom mestu, naš poznati nobelovac - Ivo Andrić je 1942. godine zadovoljavao svoju radoznalost istražujući netaknute predele prirode Sokobanje. Iskusite atmosferu prošlosti i otkrijte nasleđe koje zrači iz svakog ugla naše vile. Mon Repos - pozivamo vas da istražite tradiciju i zadovoljite svoju radoznalost.
            </p>
          </div>
          <div className='row-span-1 mx-auto'>
            <Link href='/galerija' onClick={scrollToTop}>
              <button className='h-8 bg-green-600 w-40 my-5 text-lg rounded-md text-gray-100 mx-1'>
                Galerija
              </button>
            </Link>

            <Link href='/cenovnik' onClick={scrollToTop}>
              <button className='h-8 bg-green-600 w-40 my-5 text-lg rounded-md text-gray-100 lg:hidden mx-1'>
                Cenovnik
              </button>
            </Link>
          </div>
        </div>

        <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
          <Image
            className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm'
            src="/assets/slikeVile/02 edit.jpg"
            alt="Mon Repos exterior"
            width={600}
            height={400}
          />

          <div className='text-justify font-medium '>
            <p className='py-2 px-2 border-b text-justify mt-8 tracking-tighter '>
              Da li žudite za oazom elegancije i opuštanja, gde se prošlost susreće sa savremenim udobnostima? Smešteno usred netaknute prirode, idealno za prave ljubitelje aktivnog odmora vila Mon Repos je vaše utočište. Doživite vrhunske trenutke dok istražujete staze i biciklističke puteve, otkrivajući tajanstvene pejzaže. Da, Mon Repos je taj jedinstveni kutak gde vaše želje postaju stvarnost.
            </p>
          </div>
          <div className='row-span-1 mx-auto'>
            <Link href='/kontakt' onClick={scrollToTop}>
              <button className='h-8 bg-green-600 w-40 my-5 text-lg rounded-md text-gray-100 mx-1'>
                Kontakt
              </button>
            </Link>

            <Link href='/galerija' onClick={scrollToTop}>
              <button className='h-8 bg-green-600 w-40 my-5 text-lg rounded-md text-gray-100 lg:hidden mx-1'>
                Galerija
              </button>
            </Link>
          </div>
        </div>

        <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
          <Image
            className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm'
            src="/assets/slikeVile/x.jpg"
            alt="Mon Repos location"
            width={400}
            height={300}
          />

          <div className='text-justify tracking-tighter font-medium'>
            <p className='py-2 px-2 border-b text-justify mt-8 '>
              Banje omogućavaju odmor i uživanje u prirodnim lepotama. Posle šetnje kroz slikovitu banju, predah možete pronaći u mirnom kutku uz prijatnu kafu. Udaljenost od centra je samo tri minuta hoda, omogućavajući vam laku dostupnost lokalnih atrakcija i restorana. Iskoristite ovu priliku da se relaksirate, povežete sa prirodom i uživate u mirnom ritmu banjskog života.
            </p>
          </div>
          <div className='row-span-1 mx-auto'>
            <Link href='/cenovnik' onClick={scrollToTop}>
              <button className='h-8 bg-green-600 w-40 my-5 text-lg rounded-md text-gray-100 mx-1'>
                Cenovnik
              </button>
            </Link>

            <Link href='/galerija' onClick={scrollToTop}>
              <button className='h-8 bg-green-600 w-40 my-5 text-lg rounded-md text-gray-100 lg:hidden mx-1'>
                Galerija
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
