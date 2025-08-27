import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-extrabold text-white"
      >
        <a href="https://instagram.com/rebel_pandu_official" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">rebel_pandu_official</a>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-4 text-xl md:text-2xl text-white/90"
      >
        Reels  • Edits  • Vlogs 
      </motion.p>
    </section>
  );
};

export default Hero;
