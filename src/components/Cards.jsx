import React from 'react'
import CardsPic from '../assets/slikeVile/02 edit.jpg'  
import CardsPic1 from '../assets/slikeVile/terasa-3.jpg'
import CardsPic2 from '../assets/slikeVile/x.jpg'
const Cards = () => {
  return (
    <div className='w-full py-[3rem] '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm' src={CardsPic1} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Dobrodošli u Mon Repos, gde se tradicija i radoznalost stapaju u jedinstveno iskustvo. Na ovom mestu, naš poznati nobelovac - Ivo Andrić je 1952. godine zadovoljavao svoju radoznalost istražujući netaknute predele prirode Sokobanje. Iskusite atmosferu prošlosti i otkrijte nasleđe koje zrači iz svakog ugla naše vile. Mon Repos - pozivamo vas da istražite tradiciju i zadovoljite svoju radoznalost. </p>
                </div>
            </div>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4 my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white'>
                <img className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm' src={CardsPic} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Da li žudite za oazom elegancije i opuštanja, gde se prošlost susreće sa savremenim udobnostima? Smešteno usred netaknute prirode, idealno za prave ljubitelje aktivnog odmora vila Mon Repos je vaše utočište. Doživite vrhunske trenutke dok istražujete staze i biciklističke puteve, otkrivajući tajanstvene pejzaže. Da, Mon Repos je taj jedinstveni kutak gde vaše želje postaju stvarnost.</p>
                </div>
            </div>
            <div className='w-full shadow-xl shadow-green-100 flex flex-col p-4  my-8 lg:my-4 rounded-lg hover:scale-110 duration-300 bg-white' >
                <img className='w-50 mx-auto mt-[-3rem] bg-white rounded-t-lg rounded-b-sm' src={CardsPic2} alt="" />

                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8 tracking-wide'>Banje omogućavaju odmor i uživanje u prirodnim lepotama. Posle šetnje kroz slikovitu banju, predah možete pronaći u mirnom kutku uz prijatnu kafu. Udaljenost od centra je samo tri minuta hoda, omogućavajući vam laku dostupnost lokalnih atrakcija i restorana. Iskoristite ovu priliku da se relaksirate, povežete sa prirodom i uživate u mirnom ritmu banjskog života.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards