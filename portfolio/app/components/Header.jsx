import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <div className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center px-4 isolate">
      
      {/* CITY BACKDROP */}
      <div 
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none transition-all duration-700"
        style={{ 
          backgroundImage: `url(${assets.cityback?.src || assets.cityback})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'top center',
          filter: darkMode ? 'grayscale(1) brightness(0.4)' : 'grayscale(1) brightness(0.9)', 
          opacity: darkMode ? 0.3 : 0.8,
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
        }}
      ></div>

      {/* --- LEFT SIDE: THE ARCHIVE --- */}
      <div className="hidden xl:flex absolute left-[5%] top-[40%] -translate-y-1/2 flex-col items-start z-20">
        <div className="w-56 h-72 bg-neutral-300 dark:bg-neutral-800 border-2 border-black rotate-12 translate-y-10 shadow-lg"></div>
        <div className="relative w-64 h-80 bg-white dark:bg-neutral-700 border-4 border-black -rotate-3 shadow-2xl p-6">
           <div className="border-b-4 border-black pb-2 mb-4 flex justify-between">
             <p className="font-detective text-xs uppercase font-bold text-black dark:text-white">Dossier: J_COHEN</p>
           </div>
           <div className="space-y-4">
             <div className="w-full h-2 bg-black/10"></div>
             <div className="w-3/4 h-2 bg-black/10"></div>
             <div className="w-full h-32 bg-black/5 border border-dashed border-black/20 flex items-center justify-center italic font-detective text-black/20 text-xs text-center p-4">
               REDACTED PROJECT INTEL
             </div>
           </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: SPREAD OUT CLUE SCENE --- */}
      <div className="hidden lg:block absolute right-0 top-0 w-[30%] h-full z-20">
        
        {/* Clue 1: Top Polaroid (High) */}
        <div className="absolute top-[10%] right-[20%] w-44 h-52 bg-white border-2 border-black rotate-12 shadow-2xl p-3 pb-10">
           <div className="w-full h-full bg-neutral-900 border border-black overflow-hidden">
              <code className="text-[7px] text-green-500 font-mono p-2 leading-tight">AUTH_TOKEN: <br/> ************</code>
           </div>
           <p className="font-detective text-[8px] mt-2 text-black font-bold uppercase">Evidence #01</p>
        </div>

        {/* Clue 2: Sticky Note (Middle-ish) */}
        <div className="absolute top-[35%] right-[40%] w-28 h-28 bg-yellow-200 border border-black/20 shadow-lg -rotate-12 p-4 flex items-center justify-center text-center z-30">
           <p className="font-comic text-black text-[10px] font-bold uppercase -rotate-2">
             ENCRYPT <br/> EVERYTHING
           </p>
        </div>

        {/* Clue 3: Forensic Marker 'A' (Near Center) */}
        <div className="absolute top-[50%] right-[10%] w-12 h-12 bg-white border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-6">
           <span className="font-comic text-2xl text-black">A</span>
        </div>

        {/* Clue 4: Fingerprint Card (Lower) */}
        <div className="absolute bottom-[25%] right-[25%] w-36 h-48 bg-neutral-100 border-2 border-black rotate-[-8deg] p-4 shadow-2xl">
            <div className="w-full h-24 bg-black/10 rounded-full blur-[3px] mb-4"></div>
            <p className="font-detective text-[8px] text-black font-black uppercase border-t border-black pt-2">ID_MATCH: 98%</p>
        </div>

        {/* Clue 5: Scattered Casings (Very Low) */}
        <div className="absolute bottom-[15%] right-[45%] w-6 h-2 bg-yellow-600 border border-black rounded-full rotate-45 shadow-sm"></div>
        <div className="absolute bottom-[12%] right-[40%] w-6 h-2 bg-yellow-600 border border-black rounded-full -rotate-12 shadow-sm"></div>
      </div>

      {/* --- CRIME TAPES: PUSHED DEEP INTO CENTER --- */}
      <div className="absolute left-[-15%] md:left-[5%] bottom-[10%] w-[130%] md:w-[700px] bg-yellow-400 border-y-[10px] border-black -rotate-[12deg] z-40 shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
        <p className="font-detective text-sm md:text-3xl text-black text-center py-5 tracking-[0.6em] font-black uppercase">
          DO NOT CROSS // INVESTIGATION
        </p>
      </div>

      <div className="absolute right-[-15%] md:right-[5%] bottom-[10%] w-[130%] md:w-[700px] bg-yellow-400 border-y-[10px] border-black rotate-[12deg] z-40 shadow-[0_25px_70px_rgba(0,0,0,0.7)]">
        <p className="font-detective text-sm md:text-3xl text-black text-center py-5 tracking-[0.6em] font-black uppercase">
          CRIME SCENE // DO NOT CROSS
        </p>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-30 w-full max-w-4xl text-center flex flex-col items-center gap-8 px-4">
        {/* Profile */}
        <div className="relative group">
          <div className="absolute inset-0 bg-red-700 translate-x-4 translate-y-4 border-4 border-black z-0 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative z-10 border-4 border-black bg-white p-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <Image 
              src={assets.user_image} 
              alt="Jonathan Cohen" 
              className={`w-44 md:w-56 lg:w-64 mx-auto object-cover ${darkMode ? 'grayscale brightness-90' : 'grayscale'}`} 
            />
          </div>
        </div>

        {/* Headline */}
        <div className="bg-black text-white px-8 md:px-12 py-6 md:py-8 border-l-[15px] border-red-700 mt-4 rotate-1 shadow-[25px_25px_0px_0px_rgba(185,28,28,0.2)]">
          <h1 className="text-4xl sm:text-6xl lg:text-[75px] font-comic uppercase leading-none tracking-tighter italic">
            Fullstack Web Developer <br /> 
            <span className="text-red-600 underline decoration-double decoration-black/50">Manchester Based.</span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
          <a href="#contact" className="px-12 py-4 font-detective text-xl uppercase text-white bg-red-700 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
            Contact Me
          </a>
          <a href="/cv.pdf" download className="px-12 py-4 font-detective text-xl uppercase text-black bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
            The Dossier (CV)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;