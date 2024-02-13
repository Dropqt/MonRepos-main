import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer class="bg-white  shadow dark:bg-gray-800 mt-auto bottom-0 w-full">
        <div class="w-full mx-auto max-w-screen-xl p-4 pl-[90px] md:flex items-center justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Mon Repos</a>. Sva prava zadržana
            </span>
            <ul class="flex flex-wrap items-center pl-[30px] mt-3 padding-left: 35px text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <NavLink to='/galerija'><span className='hover:underline me-4 md:me-6'>Galerija</span></NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'><span className='hover:underline me-4 md:me-6'>Kontakt</span></NavLink>
                </li>
                <li>
                    <NavLink to='/cenovnik' ><span className='hover:underline me-4 md:me-6'>Cenovnik</span></NavLink>
                </li>
            </ul>
        </div>
    </footer>

  )
}

export default Footer