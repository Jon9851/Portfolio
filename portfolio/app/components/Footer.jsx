import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 px-6 sm:px-12">
      <div className="text-center">
        <h4 className="text-lg font-semibold">Let's Connect</h4>
      </div>

      <div className="sm:flex items-center justify-between border-t border-gray-800 mt-12 py-6 sm:mt-10">
        {/* Copyright Section */}
        <div className="text-center sm:text-left">
          <span className="text-sm text-gray-600">© Jonathan Cohen 2025.</span>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-0">
          <Image src={assets.mail_icon} alt="Email Icon" className="w-6" />
          <span className="text-sm text-gray-600">joncohen21K@hotmail.co.uk</span>
        </div>

        {/* Social Links */}
        <ul className="flex items-center justify-center gap-6 mt-6 sm:mt-0">
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://www.linkedin.com/in/jonathan-cohen-8447ba162/" 
              className="text-sm text-gray-600 hover:text-red-500 transition duration-300"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              href="https://github.com/Jon9851" 
              className="text-sm text-gray-600 hover:text-red-500 transition duration-300"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
