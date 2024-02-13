import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { act } from '@react-three/fiber';

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
     className={`${styles.paddingX} 
     w-full flex items-center py-5 fixed top-0 z-20
     bg-primary`}>
      <div className="flex justify-between items-center w-full m-w-7xl mx-auto">
        <Link 
        to="/" 
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img 
          src={logo} 
          alt="logo" 
          className="w-9 h-9 object-contain" />
          <p className='text-white text-[30px] boldtitle cursor-pointer'>ramiro garza</p>
        </Link>
        <ul className='list-none  sm-flex
        flex-row gap-10'>
          {navLinks.map((link) => ( 
             <li
             key={link.id}
             className={`${
              active === link.title
              ? "text-blue" : "text-black"
             } hover:text-blue text-[18px] font-medium cursor-pointer`}>
               <a href={`#${link.id}`}>{link.title}</a>
             </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar