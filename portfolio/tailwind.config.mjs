import { Outfit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',  // Ensures dark mode works with the class
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: 'black',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"], // Fixed typo here
        Ovo: ["Ovo", "serif"],
      },
    },
  },
  plugins: [],
};
