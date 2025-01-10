import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  // Check system preference or localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav 
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
          ${isScroll ? 'bg-opacity-100 backdrop-blur-lg shadow-sm' : ''} 
          ${darkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'}`}
      >
        <a href="#top" className="flex items-center">
          <h1 className="text-2xl font-bold w-auto cursor-pointer flex items-center">
            Jonathan Cohen<span className="text-red-600">.</span>
          </h1>
        </a>
        
        {/* nav bar home and contact buttons */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 border-2 
          ${darkMode ? 'bg-darkTheme text-white border-white' : 'bg-white text-black border-gray-800'}`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About</a></li>
          <li><a className='font-Ovo' href="#work">My Work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
        </ul>

        {/* Dark mode toggle and contact button */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)}>
            <Image 
              src={darkMode ? assets.sun_icon : assets.moon_icon} 
              alt='toggle dark mode' 
              className='w-6'
            />
          </button>
          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo border-2 border-black bg-opacity-90">
            Contact
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu-black icon" className="w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen 
          transition duration-500 
          ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
        </div>
        <li>
          <a className='font-Ovo' onClick={closeMenu} href="#top">Home</a>
        </li>
        <li>
          <a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a>
        </li>
        <li>
          <a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a>
        </li>
        <li>
          <a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
