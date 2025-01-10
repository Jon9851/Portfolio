import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-10'>
      <div className='text-center'>
      </div>
      
      <div className='text-center sm:flex items-center justify-between border-t border-black-800 mx-[10%] mt-12 py-6 sm:mt-10'>
        <div className='flex justify-start'>
          <span>© Jonathan Cohen 2025.</span>
        </div>

        <div className='flex items-center gap-2'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          <span>joncohen21K@hotmail.co.uk</span>
        </div>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-10'>
          <li>
            <a 
              target='_blank' 
              href="https://www.linkedin.com/in/jonathan-cohen-8447ba162/" 
              className="hover:text-red-500"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a 
              target='_blank' 
              href="https://github.com/Jon9851" 
              className="hover:text-red-500"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
