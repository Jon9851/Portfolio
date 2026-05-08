import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added state

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* BACKGROUND STRIP */}
      <div className={`fixed top-0 left-0 w-full z-40 overflow-hidden border-b-4 border-black transition-all duration-300 ${isScroll ? 'h-16' : 'h-24'}`}>
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
        <div className="absolute inset-0 z-10 opacity-20 pointer-events-none bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:6px_6px]"></div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className={`w-full fixed top-0 left-0 right-0 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? 'h-16' : 'h-24'}`}>
        <a href="#top" className="flex items-center">
          <div className="border-4 border-black bg-white px-4 py-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            <h1 className="text-xl font-comic uppercase tracking-tighter text-black">
              J. Cohen<span className="text-red-700 font-black animate-pulse">_</span>
            </h1>
            <p className="text-[10px] font-detective border-t border-black -mt-1 text-black uppercase">Fullstack_Operative</p>
          </div>
        </a>
        
        <ul className={`hidden md:flex items-center gap-0 border-4 border-black shadow-[6px_6px_0px_0px_rgba(185,28,28,0.3)] overflow-hidden ${darkMode ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          {['The File', 'The Bio', 'Evidence', 'Informant'].map((label, i) => (
            <li key={label} className={`relative z-10 ${i !== 3 ? 'border-r-2 border-black' : ''} hover:bg-red-700 hover:text-white transition-colors group`}>
              <a className='font-detective font-bold uppercase px-6 py-3 block text-sm tracking-tighter' href={`#${['top', 'about', 'work', 'contact'][i]}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 relative z-10">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 border-2 border-black bg-white hover:bg-red-700 hover:invert transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Image src={darkMode ? assets.sun_icon : assets.moon_icon} alt='toggle' className='w-5' />
          </button>
          
          <button className='block md:hidden border-2 border-black p-1 bg-white hover:bg-red-700 transition-colors' onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className="w-8" />
          </button>
        </div>
      </nav>

      {/* --- SIDE MENU --- */}
      {/* 1. Changed fixed position to use translate-x-full by default.
          2. Used template literal to toggle translate-x-0 (open) vs translate-x-full (closed).
          3. Added "invisible" when closed to prevent interaction with hidden elements.
      */}
      <ul 
        className={`flex md:hidden flex-col gap-6 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 h-screen z-[100] transition-transform duration-500 border-l-8 border-black font-detective uppercase shadow-[-20px_0px_50px_rgba(0,0,0,0.5)]
        ${darkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#f4f1ea] text-black'}
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full invisible md:visible'}`}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="absolute right-6 top-6 border-2 border-black p-1 bg-white hover:bg-red-700 transition-colors cursor-pointer" onClick={closeMenu}>
          <Image src={assets.close_black} alt='close' className="w-6" />
        </div>
        
        <p className="text-[10px] text-red-700 font-black tracking-[0.3em] mb-4 border-b border-red-700/30 pb-2">// NAVIGATION_LOG</p>

        {['The File', 'The Bio', 'Evidence', 'Informant'].map((label, i) => (
          <li key={label} className="group">
            <a onClick={closeMenu} href={`#${['top', 'about', 'work', 'contact'][i]}`} className="text-xl italic font-black hover:text-red-700 flex items-center gap-2 transition-transform hover:translate-x-2">
              <span className="text-red-700 opacity-0 group-hover:opacity-100">{'>'}</span>
              {label}
            </a>
          </li>
        ))}
        
        <div className="mt-auto pt-10 border-t border-black/20 text-[10px] font-mono leading-tight space-y-1">
          <p className="flex justify-between"><span>STATUS:</span> <span className="text-red-700 font-bold">CLASSIFIED</span></p>
          <p className="flex justify-between"><span>NODE:</span> <span>MANCHESTER</span></p>
          <p className="flex justify-between"><span>ID:</span> <span>J_COHEN_89</span></p>
          <div className="mt-4 bg-black text-white p-2 text-center text-[8px] animate-pulse">ENCRYPTION_ACTIVE</div>
        </div>
      </ul>
    </>
  );
};

export default Navbar;