"use client";
import React, { useState, useEffect } from "react";

const FileOpening = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Signal that we are now on the client
    
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(onComplete, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // If we aren't mounted yet, return null (or a simple black screen) 
  // to avoid the Math.random() mismatch during SSR
  if (!mounted) return <div className="fixed inset-0 z-[999] bg-black" />;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black perspective-[1500px] overflow-hidden">
      
      <div 
        className={`relative w-full h-full bg-[#141414] flex flex-col items-center justify-center 
        transition-all duration-1000 ease-in-out origin-top shadow-[0_50px_100px_rgba(0,0,0,0.9)]
        border-b-[30px] border-black
        ${isOpen ? "rotate-x-[110deg] opacity-0 translate-z-[200px]" : "rotate-x-0 opacity-100"}`}
      >
        <div className="absolute top-0 left-12 w-48 h-12 bg-[#141414] -translate-y-full border-t-4 border-x-4 border-black flex items-center justify-center">
          <span className="text-[11px] font-mono font-black text-red-700 tracking-[0.2em]">CLASSIFIED_INTEL</span>
        </div>

        <div className="text-center p-12 border-[8px] border-red-700 max-w-md bg-black/40 backdrop-blur-md">
          <h2 className="text-red-700 font-black text-5xl italic mb-4 uppercase tracking-tighter">
            Cohen_J
          </h2>
          <div className="h-1.5 w-full bg-red-700 mb-6 animate-pulse"></div>
          <p className="font-mono text-xs text-red-600 tracking-[0.3em] uppercase">
            Accessing Secure Dossier...
          </p>
        </div>

        <div className="absolute bottom-24 right-16 border-4 border-black bg-red-700 text-white px-8 py-3 font-black text-xl rotate-[-12deg] uppercase shadow-2xl">
          Authorized_Only
        </div>
      </div>

      <style jsx>{`
        .rotate-x-\[110deg\] { transform: rotateX(110deg); }
        .translate-z-\[200px\] { transform: translateZ(200px); }
      `}</style>
    </div>
  );
};

export default FileOpening;