'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference on mount and set darkMode accordingly
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      // Use the stored theme if it exists
      setDarkMode(storedTheme === "dark");
    } else {
      // Otherwise, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Apply dark or light mode based on the darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
     
    </>
  );
}
