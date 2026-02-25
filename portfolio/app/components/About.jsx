import { assets, infoList, toolsData } from '@/public/assets/assets';
import React from 'react';
import Image from 'next/image';

const About = ({ darkMode }) => {
  return (
    <div id="about" className="relative w-full min-h-screen py-20 px-6 sm:px-12 scroll-mt-20 overflow-hidden isolate">
      
      {/* --- LAYER 1: THE CASE FILE BACKDROP --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-700"
        style={{ 
          backgroundImage: `url(${assets.file?.src || assets.file_backdrop})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
          // FIXED: Removed blend modes that fight dark backgrounds
          mixBlendMode: 'normal', 
          
          // FIXED: Boosted brightness for Dark Mode visibility (0.5 instead of 0.3)
          filter: darkMode 
            ? 'grayscale(1) brightness(0.5) contrast(1.3)' 
            : 'grayscale(1) contrast(1.4) brightness(0.95)', 
          
          // FIXED: Opacity adjusted to let the "Inky Black" background show through
          opacity: darkMode ? 0.4 : 0.8,

          maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
        }}
      ></div>

      {/* --- LAYER 2: INTERACTIVE CONTENT --- */}
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h4 className="text-xl font-detective uppercase tracking-[0.3em] text-red-700 mb-2">
            -- Classified Intel --
          </h4>
          <h2 className="text-5xl sm:text-7xl font-comic uppercase italic tracking-tighter drop-shadow-md text-black dark:text-white">
            The Subject
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-red-700 translate-x-3 translate-y-3 border-4 border-black z-0 transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
              
              <div className="relative z-10 border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src={assets.user_image}
                  alt="Subject Mugshot"
                  // Ensure mugshot is bright enough to see
                  className={`w-64 md:w-80 object-cover ${darkMode ? 'grayscale brightness-90' : 'grayscale'}`}
                />
                <div className="mt-2 text-center border-t-2 border-black pt-2">
                  <p className="font-detective font-bold uppercase text-black">COHEN_J_7821</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            {/* Bio Panel - Added dark:border-white to prevent it vanishing */}
            <div className={`p-8 border-4 border-black dark:border-white shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] rotate-1 mb-12 
              ${darkMode ? 'bg-neutral-900/95 text-white shadow-red-900/20' : 'bg-white/90 text-black'}`}>
              <p className="mb-6 font-detective text-lg leading-relaxed first-letter:text-4xl first-letter:font-comic first-letter:text-red-700">
                Subject holds a <span className="bg-red-700 text-white px-1">Diploma in Software Development</span>. Exhibits strong foundations in full-stack operations. Proficiencies verified in HTML, JavaScript, Python, and AWS infrastructure.
              </p>
              <p className="font-detective text-lg leading-relaxed">
                Practical experience noted with MongoDB and PostgreSQL. Operates with high precision in Django environments. Recommendation: <span className="italic font-bold">Highly dedicated operative.</span>
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  key={index}
                  className={`border-2 border-black p-4 transition-all hover:-translate-y-1 hover:bg-red-700 group
                    ${darkMode ? 'bg-neutral-800 text-white dark:border-white/50' : 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}`}
                >
                  <Image src={icon} alt="" className={`w-6 mb-2 ${darkMode ? 'invert' : 'group-hover:invert'}`} />
                  <h3 className="font-comic text-lg uppercase group-hover:text-white">{title}</h3>
                  <p className="text-xs font-detective group-hover:text-white/90">{description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12">
               <h4 className="font-comic text-2xl uppercase italic text-red-700 mb-6 tracking-tighter">Approved Toolkit</h4>
               <ul className="flex flex-wrap gap-4">
                  {toolsData.map((tool, index) => (
                    <li key={index} className="w-14 h-14 border-4 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform">
                      <Image src={tool} alt="tool" className="w-10" />
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;