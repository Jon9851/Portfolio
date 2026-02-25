import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className="relative mt-20 border-t-8 border-black overflow-hidden bg-black">
      
      {/* --- LAYER 1: THE COMIC ART --- */}
      {/* We keep the image at 100% opacity, but use filters to dim it */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={assets.end?.src || assets.end} 
          alt="End of File Comic Art"
          fill
          priority
          className={`object-cover object-center transition-all duration-500
            ${darkMode 
              ? 'grayscale brightness-[0.25] contrast-[1.2]' 
              : 'grayscale brightness-[0.5] contrast-[1.1]'}
          `}
        />
        {/* Physical Dot Pattern (Halftone) */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle,black_1px,transparent_1px)] [background-size:4px_4px]"></div>
      </div>

      {/* --- LAYER 2: CONTENT AREA --- */}
      <div className="relative z-20 px-6 sm:px-12 py-24">
        
        {/* THE TITLE: Wrapped in a High-Contrast Box for readability */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[12px_12px_0px_0px_rgba(185,28,28,1)] -rotate-1">
            <h4 className="font-comic text-5xl md:text-7xl uppercase italic tracking-tighter text-black">
              End of <span className="text-red-700">File_</span>
            </h4>
            <p className="font-detective text-sm text-black opacity-80 uppercase tracking-[0.3em] mt-2 font-bold border-t-2 border-black pt-2">
              Manchester Division // Unit 25546
            </p>
          </div>
        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="max-w-6xl mx-auto sm:flex items-center justify-between gap-6">
          
          {/* Copyright Section - Stamped Style */}
          <div className="text-center sm:text-left mb-8 sm:mb-0">
            <span className="font-detective text-md uppercase bg-white text-black border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              © J. COHEN // 2026
            </span>
          </div>

          {/* Contact Section - High Visibility Label */}
          <div className="flex items-center justify-center gap-3 border-4 border-black bg-red-700 text-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group">
            <Image src={assets.mail_icon} alt="Email" className="w-6 invert" />
            <span className="font-detective text-sm md:text-base font-black truncate">
              joncohen21K@hotmail.co.uk
            </span>
          </div>

          {/* Social Links - Comic Caption Boxes */}
          <ul className="flex items-center justify-center gap-4 mt-10 sm:mt-0">
            {['LinkedIn', 'Github'].map((link) => (
              <li key={link}>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href={link === 'LinkedIn' ? "https://www.linkedin.com/in/jonathan-cohen-8447ba162/" : "https://github.com/Jon9851"} 
                  className="bg-white border-2 border-black text-black px-4 py-2 font-detective font-black uppercase text-sm hover:bg-black hover:text-white transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* LARGE REDACTED STAMP - Lowered Opacity so it doesn't fight the text */}
        <div className="mt-20 text-center opacity-40">
          <div className="inline-block border-8 border-red-700 px-10 py-2 text-red-700 font-comic text-6xl md:text-8xl uppercase -rotate-6 tracking-tighter select-none">
            CLASSIFIED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;