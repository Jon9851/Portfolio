import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex justify-center">
      
      {/* 1. BACKGROUND: HALFTONE CITY */}
      <div 
        className="absolute inset-0 z-0 grayscale contrast-[1.1] brightness-110"
        style={{ 
          backgroundImage: `url(${assets.cityback?.src || assets.cityback})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#000_1.2px,transparent_0)] bg-[size:14px_14px] opacity-[0.12]"></div>
      </div>

      {/* 2. NOIR RAIN (INK STREAKS) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        {[...Array(45)].map((_, i) => (
          <div key={i} className="absolute bg-black w-[1px] animate-[rain_0.8s_linear_infinite]"
            style={{ left: `${Math.random() * 100}%`, height: '100px', animationDelay: `${Math.random() * 2}s` }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT SPREAD --- */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-[1440px] min-h-screen px-8 pt-32 pb-20 gap-x-12 xl:gap-x-20">
        
        {/* PANEL LEFT: THE EXTENDED DOSSIER */}
        <div className="hidden xl:flex w-[300px] flex-col bg-[#fdfaf3] border-[6px] border-black p-5 -rotate-2 shadow-[15px_15px_0px_black] self-start group hover:rotate-0 transition-transform duration-500">
          <div className="bg-black text-white text-[10px] px-3 py-1.5 mb-4 font-mono flex justify-between uppercase tracking-tighter">
            <span>[INTEL: 89-MCR]</span>
            <span className="text-red-600 animate-pulse font-black">●</span>
          </div>

          <div className="space-y-3 grayscale contrast-[2] brightness-90">
            <div className="border-4 border-black h-20 overflow-hidden relative">
              <Image src={assets.cityback} alt="e1" className="w-full h-full object-cover" />
              <div className="absolute top-0 right-0 bg-black text-white text-[7px] px-1">LOC_SCAN</div>
            </div>
            <div className="border-4 border-black h-40 overflow-hidden relative">
              <Image src={assets.user_image} alt="e2" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-red-700 text-white text-[8px] px-1 font-bold italic">SUBJECT_ID</div>
            </div>
          </div>

          <div className="mt-6 space-y-3 border-t-2 border-black/10 pt-4">
             <p className="text-[10px] font-black uppercase text-black leading-none tracking-widest">// CORE_PROTOCOLS:</p>
             <div className="flex flex-wrap gap-1">
                {['HTML5', 'CSS3', 'JS_ES6'].map(core => (
                  <span key={core} className="bg-black text-white text-[8px] px-1 border border-white/20 font-mono">{core}</span>
                ))}
             </div>
             <p className="text-[9px] text-black/60 font-mono leading-tight">
                Subject exhibits strong foundation in full-stack architecture and logic deployment.
             </p>
             <div className="h-4 w-full bg-black opacity-90 rounded-sm italic text-[8px] text-white flex items-center px-2">REDACTED_DATA_STREAM</div>
          </div>

          <div className="mt-auto pt-4 flex flex-col items-center">
            <div className="border-4 border-red-700 text-red-700 px-4 py-1 font-black text-xs rotate-[-12deg] uppercase">Verified_2026</div>
          </div>
        </div>

        {/* CENTER HUB: THE MAIN PHOTO & NAME */}
        <div className="flex flex-col items-center max-w-[650px] z-30">
          <div className="bg-white border-[12px] border-black shadow-[30px_30px_0px_rgba(0,0,0,0.2)] rotate-1 overflow-hidden group">
             <div className="w-[340px] md:w-[580px] aspect-[16/10] relative bg-black">
                <Image src={assets.walk} alt="Subject" className="w-full h-full object-cover grayscale contrast-[1.8] brightness-75 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-0 w-full h-1 bg-red-600 shadow-[0_0_15px_red] animate-[scan_4s_linear_infinite]"></div>
                
                <div className="absolute inset-0 p-4 flex flex-col justify-between border-[15px] border-transparent">
                   <div className="flex justify-between text-[11px] text-red-600 font-black italic"><span>● REC</span><span>MCR_UNIT_04</span></div>
                   <div className="bg-black/90 border border-white/20 p-3 text-white text-[10px] font-mono self-start uppercase">
                      <p className="text-red-600 font-bold tracking-tighter">NAME: COHEN, J.</p>
                      <p>FILE: L3_DECRYPTED</p>
                   </div>
                </div>
             </div>
          </div>

          {/* NAME OVERLAY (TITLED BOX) */}
          <div className="relative -mt-16 flex flex-col items-center">
            <div className="relative px-12 py-4">
              <div className="absolute inset-0 bg-red-700 -rotate-2 border-y-4 border-black shadow-[12px_12px_0px_black] -z-10"></div>
              <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter drop-shadow-[5px_5px_0px_black]">
                Jonathan Cohen
              </h1>
            </div>
            <p className="mt-8 font-black text-black text-sm md:text-lg italic tracking-[0.2em] uppercase bg-white/90 border-2 border-black px-6 py-1">
               // Fullstack_Operative // Manchester_Based
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-12 justify-center">
             <button className="px-10 py-5 bg-red-700 text-white font-black border-4 border-black shadow-[10px_10px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase italic text-xl tracking-tighter">Initiate Contact</button>
             <button className="px-10 py-5 bg-white text-black font-black border-4 border-black shadow-[10px_10px_0px_black] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase italic text-xl underline underline-offset-4 decoration-2">Download Dossier</button>
          </div>
        </div>

        {/* RIGHT PANEL: SYSTEM LOG / ARCHITECTURE */}
        {/* RIGHT PANEL: VISUAL LOGIC SCHEMATIC */}
<div className="hidden lg:flex w-[300px] flex-col bg-white border-[6px] border-black shadow-[-15px_15px_0px_black] rotate-2 mt-24 p-6 self-start group hover:rotate-0 transition-all duration-500">
  
  <div className="bg-black text-white text-[10px] py-1 px-3 mb-6 font-mono text-center tracking-[0.3em] uppercase">
    [LOGIC_MAPPING]
  </div>

  <div className="flex flex-col items-center gap-2 relative">
    {/* Connector Line */}
    <div className="absolute w-[2px] h-[80%] bg-black/10 left-1/2 -translate-x-1/2 top-10"></div>

    {/* CORE ENGINE NODE */}
    <div className="z-10 w-16 h-16 bg-black rounded-full flex items-center justify-center border-4 border-white shadow-[0_0_15px_rgba(0,0,0,0.2)] mb-4">
      <span className="text-white font-black italic text-xl">JS</span>
    </div>

    {/* BRANCHING NODES */}
    <div className="w-full space-y-6">
      
      {/* Front-End Node */}
      <div className="z-10 bg-white border-2 border-black p-2 shadow-[5px_5px_0px_black] relative group/node overflow-hidden">
        <div className="absolute inset-0 bg-red-700 translate-x-[-100%] group-hover/node:translate-x-0 transition-transform duration-300 -z-10"></div>
        <p className="text-[8px] font-black uppercase text-red-600 group-hover/node:text-white transition-colors">Front_End_Node</p>
        <p className="text-[11px] font-black uppercase group-hover/node:text-white transition-colors tracking-tighter">React / Next.js / Three.js</p>
      </div>

      {/* Back-End Node */}
      <div className="z-10 bg-white border-2 border-black p-2 shadow-[5px_5px_0px_black] relative group/node overflow-hidden">
        <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover/node:translate-x-0 transition-transform duration-300 -z-10"></div>
        <p className="text-[8px] font-black uppercase text-neutral-400">Back_End_Node</p>
        <p className="text-[11px] font-black uppercase group-hover/node:text-white transition-colors tracking-tighter">Node.js / Python / Django</p>
      </div>

      {/* Data Node */}
      <div className="z-10 bg-white border-2 border-black p-2 shadow-[5px_5px_0px_black] relative group/node overflow-hidden">
        <div className="absolute inset-0 bg-red-700 translate-x-[-100%] group-hover/node:translate-x-0 transition-transform duration-300 -z-10"></div>
        <p className="text-[8px] font-black uppercase text-red-600 group-hover/node:text-white transition-colors">Data_Storage</p>
        <p className="text-[11px] font-black uppercase group-hover/node:text-white transition-colors tracking-tighter">MongoDB / PostgreSQL</p>
      </div>

    </div>

    {/* FOOTER TERMINAL */}
    <div className="mt-8 w-full bg-neutral-100 border-t-4 border-black p-3 font-mono text-[9px] text-black">
      <p className="font-bold animate-pulse text-red-700 tracking-tighter uppercase">{'>'} Ready_for_deployment</p>
    </div>
  </div>
</div>

      </div>

      {/* FOOTER MARQUEE */}
      <div className="absolute bottom-0 w-full h-12 bg-yellow-400 border-t-4 border-black flex items-center z-50 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_35s_linear_infinite] font-black text-black font-mono text-xl uppercase gap-20">
           {[...Array(4)].map((_, i) => (
             <span key={i}>Status: Available for Hire // Location: Manchester // Fullstack Operative // Logic: Verified //</span>
           ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes rain { 0% { transform: translateY(-120%); } 100% { transform: translateY(100vh); } }
        @keyframes scan { 0% { top: -5%; } 100% { top: 105%; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default Header;