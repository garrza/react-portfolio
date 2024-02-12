import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  return (
    <nav
     className={`${styles.paddingX} 
     w-full flex items-center py-5 fixed top-0 z-20
     bg-primary`}>
      <div className="flex justify-between items-center w-full m-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
        </Link>
      </div>
    </nav>
  )
}

export default Navbar