
import { assets, infoList, toolsData } from '@/assets/assets'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for system theme preference on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-ovo'>
        About Me
      </h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-80 sm:w-96 rounded-3xl max-w-none mt-10'>
          <Image
            src={assets.user_image}
            alt='user image'
            className='w-full rounded-3xl mt-[-90%]'
          />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am a passionate Fullstack Developer with a Diploma in Software Development and a versatile skill set that bridges both front-end and back-end technologies. With expertise in HTML, CSS, and JavaScript, I create visually stunning and user-friendly web pages and applications that provide engaging digital experiences. <br />
            <br /> On the back end, I specialize in building robust, secure, and scalable web applications using Python, Django, and Node.js. My hands-on experience with databases such as MongoDB, PostgreSQL, and MySQL ensures efficient data management, optimized performance, and reliable schema design. <br />
            <br /> I also have experience with React, building dynamic and responsive front-end applications that deliver seamless user experiences. By leveraging cloud platforms like AWS, I enhance scalability and deliver efficient solutions tailored to project needs.
            My commitment to delivering high-quality, full-stack software solutions makes me a valuable asset to any project requiring a comprehensive and skilled approach to development.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className={`border rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-x-1 duration-500 hover:shadow-black 
                  ${darkMode ? 'border-white text-white' : 'border-gray-400 text-gray-700'}`}
                key={index}
              >
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className={`my-4 font-semibold ${darkMode ? 'text-white' : 'text-wh-700'}`}>{title}</h3>
                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-600'}`}>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className={`my-6 text-2xl sm:text-2xl font-bold text-left ${darkMode ? 'text-white' : 'text-black-700'} font-Ovo`}>
            My Tech Stack
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-x-1 duration-500 hover:shadow-black 
                  ${darkMode ? 'border-white' : 'border-black-700'}`}
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-8 sm:w-14" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
