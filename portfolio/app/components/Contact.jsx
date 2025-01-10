import Image from 'next/image'; // Import Image component
import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Contact = () => {
  const [result, setResult] = useState("");

  // Define onSubmit function
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "56ac31d8-0096-4429-a35c-eaab603cdb18");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="w-full px-8 py-20 bg-white dark:bg-black">
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-400">
        Contact Me
      </h4>
      <h2 className="text-center text-5xl font-Ovo text-gray-800 dark:text-white">
        Get in Touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300">
        If you have any questions or job opportunities, or would like to discuss a potential project, I would be happy to connect. Please feel free to reach out, and I will respond as soon as possible.
      </p>

      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-black-800 p-8 border-2 border-black dark:border-gray-600 rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }} // Initial state of the card
        animate={{ opacity: 1, scale: 1 }}  // Final state of the card
        transition={{ duration: 0.5 }} // Animation duration
      >
        <form onSubmit={onSubmit} className="space-y-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }} // Delay for the inputs
          >
            <motion.input
              type="text"
              placeholder="Enter Your Name"
              required
              className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="name"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.input
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }} // Delay for second input
            />
          </motion.div>

          <motion.textarea
            rows="6"
            placeholder="Enter Your Message"
            required
            className="w-full px-4 py-3 border-2 border-black dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }} // Delay for textarea
          ></motion.textarea>

          <motion.button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }} // Delay for button
          >
            Submit
          </motion.button>
          <p className="mt-4">{result}</p>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
