import React from 'react';
import { assets } from '../assets/assets';
import Navbar from './Navbar';
import { motion } from "motion/react"
const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      <Navbar />

      {/* Fullscreen content area */}
      <motion.div 
      initial={{opacity:0,y:100}}
      transition={{duration :1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      className="flex items-center justify-center min-h-screen px-6 md:px-20 lg:px-32">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Explore homes that fit your dreams
          </h2>

          <div className="flex justify-center gap-6">
            <a
              href="#projects"
              className="border border-white px-8 py-3 rounded"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-blue-500  px-8 py-3 rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
