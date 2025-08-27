import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 animate-gradient"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -80, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg"
      >
        <a
          href="https://instagram.com/rebel_pandu_official"
          target="_blank"
          rel="noreferrer"
          className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-pink-300 hover:from-white hover:to-yellow-400 transition duration-300"
        >
          rebel_pandu_official
        </a>
      </motion.h1>

      {/* Tagline with fade + float */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        whileInView={{
          y: [0, -10, 0],
          transition: { repeat: Infinity, duration: 3 },
        }}
        className="mt-4 text-xl md:text-2xl text-white/90 tracking-wide"
      >
        Reels • Edits • Vlogs
      </motion.p>

      {/* Call-to-Action Button with bounce */}
      <motion.a
        href="https://instagram.com/rebel_pandu_official"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-2xl shadow-lg hover:bg-purple-100 transition"
      >
        Follow on Instagram
      </motion.a>
    </section>
  );
};

export default Hero;
