import { assets, infoList, toolsData } from '@/assets/assets';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <div className="w-full px-6 sm:px-12 py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-4xl sm:text-5xl font-ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-16 my-20">
        <div className="w-64 sm:w-80 lg:w-96 rounded-3xl">
          <Image
            src={assets.user_image}
            alt="User Image"
            className="w-full rounded-3xl object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-full font-Ovo text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          I hold a Diploma in Software Development and bring a strong foundation in front-end and back-end technologies. My skills include proficiency in HTML, CSS, JavaScript, Python, MongoDB, PostgreSQL, MySQL, Django, and AWS.<br></br>
          <br></br>On the front end, I focus on crafting user-friendly and visually appealing web interfaces using HTML, CSS, and JavaScript. On the back end, I have experience developing reliable and scalable web applications with Python and Django, ensuring functionality and performance.<br></br>
          <br></br>I also have practical experience working with databases like MongoDB, PostgreSQL, and MySQL, optimizing performance, and managing schemas effectively. My passion for learning and commitment to creating seamless digital experiences make me a dedicated and valuable contributor to any development team.
          </p>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className={`border rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-x-1 duration-500 hover:shadow-black 
                  ${darkMode ? 'border-white text-white' : 'border-gray-400 text-gray-700'}`}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className={`my-4 font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-600'}`}>{description}</p>
              </li>
            ))}
          </ul>
          <h4
            className={`my-6 text-2xl font-bold text-left ${darkMode ? 'text-white' : 'text-gray-800'} font-Ovo`}
          >
            My Tech Stack
          </h4>
          <ul className="flex items-center gap-4 flex-wrap">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className={`flex items-center justify-center w-12 sm:w-14 aspect-square border rounded-lg cursor-pointer hover:-translate-x-1 duration-500 hover:shadow-black 
                  ${darkMode ? 'border-white' : 'border-gray-800'}`}
              >
                <Image src={tool} alt="Tool" className="w-8 sm:w-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
