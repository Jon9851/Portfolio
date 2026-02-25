import { assets, workData } from '@/public/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = ({ darkMode }) => {
  return (
    <section id="work" className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden isolate">
      
      {/* --- LAYER 1: THE BACKDROP --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-700"
        style={{ 
          backgroundImage: `url(${assets.casefile?.src || assets.case})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
          // FIXED: Removed blend modes that kill visibility on dark backgrounds
          mixBlendMode: 'normal', 
          
          // FIXED: Boosted brightness (0.5) so details cut through the black background
          filter: darkMode 
            ? 'grayscale(1) brightness(0.5) contrast(1.2)' 
            : 'grayscale(1) contrast(1.2) brightness(0.95)', 
          
          opacity: darkMode ? 0.3 : 1,

          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      ></div>

      {/* --- LAYER 2: CONTENT --- */}
      <div className="relative z-10">
        <h4 className="text-center mb-2 text-xl font-detective uppercase tracking-[0.3em] text-red-700">
          -- Work File Reports --
        </h4>
        <h2 className="text-center text-5xl sm:text-6xl font-comic uppercase italic tracking-tighter drop-shadow-md text-black dark:text-white">
          Case Evidence
        </h2>
        
        {/* FIXED: Background for the subtitle to ensure readability in dark mode */}
        <p className={`text-center max-w-2xl mx-auto mt-5 mb-16 font-detective text-lg p-2 border 
          ${darkMode ? 'bg-neutral-900 text-gray-300 border-white/20' : 'bg-white/60 text-black border-black/20'}`}>
          A showcase of diverse and impactful projects demonstrating my technical ability. [VERIFIED]
        </p>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {workData.map((project, index) => (
            <div key={index} className="flex flex-col group relative">
              
              {/* Exhibit Tag */}
              <div className="absolute -top-4 -left-2 z-30 bg-yellow-400 text-black border-2 border-black px-3 py-1 font-detective font-bold text-xs -rotate-6 shadow-md group-hover:rotate-0 transition-transform">
                EXHIBIT_NO_{index + 1}
              </div>

              {/* Project Folder Card */}
              <div className={`relative z-10 border-4 border-black p-2 transition-all duration-500 group-hover:-translate-y-2 
                ${darkMode 
                  ? 'bg-neutral-900 border-white text-white shadow-[10px_10px_0px_0px_rgba(185,28,28,0.5)]' 
                  : 'bg-white border-black text-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'}`}>
                
                {/* Project Image */}
                <div
                  className="w-full h-48 bg-no-repeat bg-cover bg-center border-2 border-black dark:border-white/20 relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  {/* Noir Overlay on Image - Adjusts brightness for visibility */}
                  <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 
                    ${darkMode ? 'bg-black/50 grayscale brightness-75' : 'grayscale contrast-125 opacity-40'}`}></div>
                </div>

                {/* Project Info */}
                <div className="mt-4 p-2">
                  <div className={`flex items-center justify-between gap-2 border-b-2 pb-2 mb-3 
                    ${darkMode ? 'border-white/20' : 'border-black'}`}>
                    <h3 className="font-comic text-xl uppercase italic leading-none">
                      {project.title}
                    </h3>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black dark:border-white rounded-full bg-white w-8 h-8 flex items-center justify-center hover:bg-red-700 transition-all overflow-hidden"
                    >
                      <Image src={assets.send_icon} alt="Link" className="w-4 dark:invert" />
                    </a>
                  </div>
                  
                  <p className="text-sm font-detective leading-tight h-12 overflow-hidden mb-4 opacity-80">
                    {project.description}
                  </p>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-2 font-comic uppercase italic tracking-widest border-2 transition-colors
                      ${darkMode 
                        ? 'bg-white text-black border-white hover:bg-red-700 hover:text-white' 
                        : 'bg-black text-white border-black hover:bg-red-700'}`}
                  >
                    Review Intel
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;