import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact</h2>
      <div className="flex justify-center space-x-6 text-3xl">
        <a href="https://instagram.com/rebel_pandu_official" target="_blank" rel="noreferrer">
          <FaInstagram className="hover:text-black" />
        </a>
        <a href="https://youtube.com/@rebelpandu9225?si=V14wxfFS1br5xxc1" target="_blank" rel="noreferrer">
          <FaYoutube className="hover:text-black" />
        </a>
        <a href="https://wa.me/+916300752269" target="_blank" rel="noreferrer">
          <FaWhatsapp className="hover:text-black" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
