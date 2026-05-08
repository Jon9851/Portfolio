'use client';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FileOpening from "./components/FileOpening";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 1. Set mounted to true on load
  useEffect(() => {
    setMounted(true);
    
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 2. If not mounted, return a plain background to match your theme
  // This prevents the "Server vs Client" mismatch error
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-black" />;
  }

  return (
    <>
      {!isDoneLoading && (
        <FileOpening onComplete={() => setIsDoneLoading(true)} />
      )}

      <div 
        className={`transition-all duration-1000 ease-out ${
          isDoneLoading ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-md"
        }`}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Header darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Work darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </>
  );
}