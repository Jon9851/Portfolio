"use client";
import React, { useState } from "react";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import FileOpening from "./components/FileOpening";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white text-black dark:bg-black dark:text-white relative`}
      >
        {/* 1. THE FOLDER OPENING ANIMATION */}
        {!isDoneLoading && (
          <FileOpening onComplete={() => setIsDoneLoading(true)} />
        )}

        {/* 2. THE MAIN SITE CONTENT (Fades and scales in as folder opens) */}
        <div 
          className={`transition-all duration-1000 ease-out ${
            isDoneLoading ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
          }`}
        >
          {children}
        </div>

        {/* --- GLOBAL ANIMATIONS (Scanning & Marquee) --- */}
        <style jsx global>{`
          @keyframes scan { 0% { top: -5%; } 100% { top: 105%; } }
          @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .animate-scan { animation: scan 4s linear infinite; }
          .animate-marquee { animation: marquee 35s linear infinite; }
        `}</style>
      </body>
    </html>
  );
}