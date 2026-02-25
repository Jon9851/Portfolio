import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

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
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --- THE BACKGROUND STRIP (The actual "Visual" header) --- */}
      <div className={`fixed top-0 left-0 w-full z-40 overflow-hidden border-b-4 border-black transition-all duration-300 ${isScroll ? 'h-16' : 'h-24'}`}>
        
        {/* The Image layer - Keeping opacity at 1 so it's visible, filters handle the Noir look */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={assets.typew} 
            alt="header-bg"
            fill
            priority
            className={`object-cover object-center transition-all duration-500
              ${darkMode ? 'grayscale brightness-[0.3] contrast-[1.4]' : 'grayscale contrast-[1.1] brightness-[0.9]'}
            `}
          />
        </div>

        {/* Noir Halftone Overlay - sits on top of the image but behind the text */}
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:6px_6px]"></div>
      </div>

      {/* --- THE ACTUAL NAVIGATION (Interactive Layer) --- */}
      <nav 
        className={`w-full fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300
          ${isScroll ? 'h-16' : 'h-24'} 
          bg-transparent`} // REMOVED opacity-heavy background colors here
      >
        {/* LOGO AREA */}
        <a href="#top" className="flex items-center">
          <div className="border-4 border-black bg-white px-4 py-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <h1 className="text-xl font-comic uppercase tracking-tighter text-black">
              J. Cohen<span className="text-red-700 font-black animate-pulse">_</span>
            </h1>
            <p className="text-[10px] font-detective border-t border-black -mt-1 text-black">FULLSTACK_OPERATIVE</p>
          </div>
        </a>
        
        {/* NAV LINKS */}
        <ul className={`hidden md:flex items-center gap-0 border-4 border-black shadow-[6px_6px_0px_0px_rgba(185,28,28,0.3)] overflow-hidden relative
          ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}
        >
          {['The File', 'The Bio', 'Evidence', 'Informant'].map((label, i) => (
            <li key={label} className={`relative z-10 ${i !== 3 ? 'border-r-2 border-black' : ''} hover:bg-red-700 hover:text-white transition-colors group`}>
              <a className='font-detective font-bold uppercase px-6 py-3 block text-sm tracking-tighter' href={`#${['top', 'about', 'work', 'contact'][i]}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* UTILITY BUTTONS */}
        <div className="flex items-center gap-4 relative z-10">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="p-2 border-2 border-black bg-white hover:bg-red-700 hover:invert transition-all active:scale-90 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <Image 
              src={darkMode ? assets.sun_icon : assets.moon_icon} 
              alt='toggle' 
              className='w-5'
            />
          </button>
          
          <button className='block md:hidden border-2 border-black p-1 bg-white' onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className={`w-8 ${darkMode ? 'invert' : ''}`} />
          </button>
        </div>
      </nav>

      {/* SIDE MENU (Kept mostly original) */}
      <ul ref={sideMenuRef} 
        className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-[60] h-screen transition-transform duration-500 border-l-8 border-black font-detective uppercase
        ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f4f1ea] text-black'}`}
        style={{
          backgroundImage: `url(${assets.typew?.src || assets.typew})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right'
        }}
      >
        <div className="absolute right-6 top-6 border-2 border-black p-1 bg-white" onClick={closeMenu}>
          <Image src={assets.close_black} alt='' className={`w-6 cursor-pointer`} />
        </div>
        
        {['HOME', 'ABOUT', 'WORK', 'CONTACT'].map((item) => (
          <li key={item} className="border-b-2 border-black/20 pb-2">
            <a onClick={closeMenu} href={`#${item.toLowerCase()}`} className="text-xl italic hover:text-red-700">
              {item === 'CONTACT' ? '> INFORMANT' : `> ${item}`}
            </a>
          </li>
        ))}
        
        <div className="mt-auto opacity-30 text-[10px] font-mono leading-tight">
          STATUS: CLASSIFIED<br/>
          LOCATION: MANCHESTER<br/>
          ENCRYPTION: ACTIVE
        </div>
      </ul>
    </>
  );
};

export default Navbar;