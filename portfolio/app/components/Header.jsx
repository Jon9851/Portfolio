import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Header = ({ darkMode }) => {
  return (
    <div className="w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <div>
        <Image
          src={assets.user_image}
          alt="Image header"
          className="rounded-full w-44 mx-auto"
        />
      </div>

      {/* Introduction */}
      <h3 className="flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi, I'm Jonathan
        <Image src={assets.hand_icon} alt="icon" className="w-6" />
      </h3>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-[48px] font-Ovo gap-9 mt-4 leading-relaxed">
        Fullstack Web Developer Based in Manchester.
      </h1>

      {/* Short Description */}
      <p className="max-w-2xl text-xl md:text-2xl mx-auto font-Ovo">
        I am a Fullstack developer from Manchester with two years of experience.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Me Button */}
        <a
          href="#contact"
          className={`px-10 py-3 border rounded-full 
            ${darkMode ? 'bg-white text-black border-black' : 'bg-white text-black border-black'} 
            flex items-center gap-2`}
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>

        {/* Download CV Button */}
        <a
          href="/jonc6cv-1.pdf"
          download
          className={`px-10 py-3 border rounded-full 
            ${darkMode ? 'bg-white text-black border-black' : 'bg-white text-black border-black'} 
            flex items-center gap-2`}
        >
          Download CV
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/jonathan-cohen-8447ba162/"
          target="_blank"
          rel="noopener noreferrer"
          className={`px-10 py-3 border rounded-full 
            ${darkMode ? 'bg-white text-black border-black' : 'bg-white text-black border-black'} 
            flex items-center gap-2`}
        >
          LinkedIn
          <Image src={assets.linkedin} alt="LinkedIn" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
