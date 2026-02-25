import { assets } from '@/public/assets/assets';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ darkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("TRANSMITTING....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56ac31d8-0096-4429-a35c-eaab603cdb18");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("TRANSMISSION RECEIVED. OVER.");
      event.target.reset();
    } else {
      setResult("ERROR: " + data.message);
    }
  };

  return (
    <div id="contact" className="relative w-full px-8 py-20 scroll-mt-20 overflow-hidden isolate">
      
      {/* --- THE OFFICE DOOR BACKDROP --- */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-700 pointer-events-none"
        style={{ 
          backgroundImage: `url(${assets.door?.src || assets.office_door})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
          // FIXED: Normal blend mode to prevent vanishing
          mixBlendMode: 'normal', 
          
          // FIXED: Boosted brightness from 0.2 to 0.5 for Dark Mode visibility
          filter: darkMode 
            ? 'grayscale(1) brightness(0.5) contrast(1.4)' 
            : 'grayscale(1) contrast(1.1) brightness(0.9)',
          
          opacity: darkMode ? 0.3 : 0.8,

          maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
        }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h4 className="text-xl font-detective uppercase tracking-[0.4em] text-red-700 mb-2">
            -- J. Cohen - Fullstack Operative --
          </h4>
          <h2 className="text-5xl sm:text-6xl font-comic uppercase italic tracking-tighter dark:text-white">
            Enquiries Welcome
          </h2>
        </div>

        <motion.div
          className={`p-8 border-4 border-black dark:border-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] dark:shadow-[15px_15px_0px_0px_rgba(185,28,28,0.3)] ${
            darkMode ? 'bg-neutral-900/95' : 'bg-white/95'
          } backdrop-blur-sm`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="SUBJECT NAME"
                required
                name="name"
                // FIXED: focus:bg-neutral-800 for dark mode so it doesn't turn white when clicked
                className="w-full px-4 py-3 border-4 border-black dark:border-white font-detective bg-transparent focus:bg-red-50 dark:focus:bg-neutral-800 focus:outline-none placeholder:text-gray-500 uppercase text-black dark:text-white"
              />
              <input
                type="email"
                placeholder="RETURN ADDRESS (EMAIL)"
                required
                name="email" // FIXED: changed from name="name" to name="email"
                className="w-full px-4 py-3 border-4 border-black dark:border-white font-detective bg-transparent focus:bg-red-50 dark:focus:bg-neutral-800 focus:outline-none placeholder:text-gray-500 uppercase text-black dark:text-white"
              />
            </div>

            <textarea
              rows="5"
              placeholder="ENTER YOUR INTEL HERE..."
              required
              name="message"
              className="w-full px-4 py-3 border-4 border-black dark:border-white font-detective bg-transparent focus:bg-red-50 dark:focus:bg-neutral-800 focus:outline-none placeholder:text-gray-500 uppercase resize-none text-black dark:text-white"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-red-700 text-white font-comic text-2xl uppercase italic tracking-widest border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all"
            >
              Send Signal
            </motion.button>
            
            <p className="mt-4 font-detective font-bold text-center text-red-700 animate-pulse uppercase">
              {result}
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;