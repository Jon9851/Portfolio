import { assets } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-500">
      
      {/* 1. BACKGROUND TEXTURE & CITY - ENLARGED */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${assets.cityback?.src || assets.cityback})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center 20%',
          transform: 'scale(1.25)', 
          filter: darkMode ? 'grayscale(1) brightness(0.3) contrast(1.2)' : 'grayscale(1) brightness(0.9) contrast(1.1)',
          maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
        }}
      ></div>

      {/* --- LEFT SIDE: THE DETAILED DOSSIER --- */}
      <div className="hidden 2xl:flex absolute left-0 top-0 h-full w-[25%] flex-col justify-center items-end p-8 z-10 opacity-80 hover:opacity-100 transition-all duration-500">
        <div className="relative w-full max-w-[320px] bg-[#fdfaf3] dark:bg-neutral-900 border-l-[12px] border-red-700 shadow-2xl rotate-[-1.5deg] p-8 flex flex-col gap-6 ring-1 ring-black/5">
          <div className="flex gap-4 items-start border-b border-black/10 pb-6">
            <div className="w-24 h-24 bg-neutral-200 border-2 border-black flex-shrink-0 overflow-hidden grayscale contrast-125">
              <Image 
                src={assets.user_image} 
                alt="Subject ID" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-6 w-full bg-black dark:bg-white/20"></div>
              <p className="font-mono text-[10px] font-bold text-red-700 uppercase">File No: 89-MCR-77</p>
              <p className="font-detective text-xs text-black/60 dark:text-white/60 uppercase tracking-tighter">Jonathan Cohen</p>
            </div>
          </div>
          <div className="space-y-4 font-mono text-[11px] text-black dark:text-neutral-300">
            <div className="flex justify-between border-b border-dashed border-black/10 pb-1">
              <span className="font-bold opacity-50 uppercase">Origin:</span>
              <span>Manchester, UK</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-black/10 pb-1">
              <span className="font-bold opacity-50 uppercase">Specialization:</span>
              <span>Fullstack Developer</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-black/10 pb-1">
              <span className="font-bold opacity-50 uppercase">Experience:</span>
              <span>2 Years</span>
            </div>
            <div className="pt-2">
              <p className="font-bold opacity-50 uppercase mb-2 text-[9px]">Technical Intel:</p>
              <div className="flex flex-wrap gap-1">
                {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <span key={skill} className="px-2 py-0.5 bg-black/5 dark:bg-white/5 border border-black/10 text-[9px] font-bold">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-auto flex justify-end">
            <div className="border-2 border-red-800/40 text-red-800/40 px-3 py-1 rotate-12 font-detective font-bold text-[10px] uppercase">Classified // 2026</div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: EVIDENCE --- */}
      <div className="hidden xl:flex absolute right-12 bottom-12 z-10 flex-col items-end gap-8 opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div className="w-16 h-16 bg-yellow-400 border-[3px] border-black flex items-center justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] -rotate-12">
          <span className="font-bold text-3xl text-black italic">A</span>
        </div>
        <div className="w-40 h-48 bg-white border-2 border-black rotate-3 shadow-xl p-3 pb-10">
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center overflow-hidden">
             <span className="text-[8px] text-green-500 font-mono tracking-tighter">STABLE_BUILD_v2.0</span>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="relative z-20 flex flex-col items-center text-center max-w-7xl pt-10">
        
        {/* Profile Section - WIDE & CINEMATIC */}
        <div className="relative mb-12 group">
          <div className="absolute -inset-x-16 -inset-y-10 border-2 border-dashed border-red-700/20 dark:border-white/10 rounded-xl"></div>
          
          <div className="relative overflow-hidden border-[8px] border-black bg-white shadow-[40px_40px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[20px_20px_0px_0px_rgba(185,28,28,0.4)]">
            <div className="relative w-72 md:w-[700px] aspect-[21/9] md:aspect-[16/7] bg-neutral-900 overflow-hidden">
              <Image 
                src={assets.walk} 
                alt="Jonathan Cohen" 
                className={`w-full h-full object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-105 ${darkMode ? 'brightness-75' : 'brightness-100'}`} 
              />
              
              {/* Static Viewfinder Corners */}
              <div className="absolute inset-4 pointer-events-none border-[1px] border-white/10 flex flex-col justify-between">
                <div className="flex justify-between items-start opacity-70">
                  <div className="w-8 h-8 border-t-2 border-l-2 border-red-600"></div>
                  <div className="w-8 h-8 border-t-2 border-r-2 border-red-600"></div>
                </div>
                <div className="flex justify-between items-end opacity-70">
                  <div className="w-8 h-8 border-b-2 border-l-2 border-red-600"></div>
                  <div className="w-8 h-8 border-b-2 border-r-2 border-red-600"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-black text-white px-6 py-2 font-mono text-[10px] border border-white/20 shadow-2xl">
              FILE_REF: <span className="text-red-500 font-bold uppercase">MCR-DOC-04-COHEN</span>
            </div>
          </div>
        </div>

        {/* Typography Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-4">
            <span className="h-[2px] w-12 bg-red-700"></span>
            <h2 className="font-mono text-red-700 font-bold tracking-[0.5em] uppercase text-xs md:text-sm">
              Candidate Intel // Manchester Based
            </h2>
            <span className="h-[2px] w-12 bg-red-700"></span>
          </div>

          <div className="relative inline-block px-4">
            <h1 className="text-5xl md:text-8xl font-black text-black dark:text-white uppercase tracking-tighter leading-none italic">
              Jonathan <span className="text-red-700 underline decoration-black dark:decoration-white decoration-8 underline-offset-[12px]">Cohen</span>
            </h1>
          </div>

          <p className="max-w-2xl mx-auto font-detective text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed pt-4">
            Investigating the intersection of <span className="text-black dark:text-white font-bold underline decoration-red-600/40">Front-end design</span> and <span className="text-black dark:text-white font-bold underline decoration-red-600/40">Back-end architecture.</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 mb-20">
          <a href="#contact" className="px-12 py-5 bg-red-700 text-white font-bold uppercase tracking-widest border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Initiate Contact
          </a>
          
          <a 
            href="/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download="Jonathan_Cohen_CV.pdf" 
            className="group relative px-12 py-5 bg-white text-black font-bold uppercase tracking-widest border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
          >
            <span>📎 Download Dossier</span>
            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[8px] px-2 py-0.5 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
              FINAL_v2.pdf
            </div>
          </a>
        </div>
      </main>

      {/* --- STATUS BAR --- */}
      <div className="absolute bottom-0 w-full h-14 bg-yellow-400 border-t-4 border-black flex items-center px-6 overflow-hidden z-40">
        <div className="flex whitespace-nowrap gap-20 animate-marquee text-[24px] font-mono text-black font-black uppercase">
          {[...Array(5)].map((_, i) => (
            <span key={i}>Status: Available for Hire // Location: Manchester // Fullstack: React / Next.js / Python / Javascript //</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
};

export default Header;