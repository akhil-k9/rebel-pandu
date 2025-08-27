import React from "react";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black py-6 text-center text-gray-400">
      © {new Date().getFullYear()} rebel_pandu_official | Made with ❤️ by Kandyula Akhil 
      <a href="https://www.instagram.com/rebel_akhill/?__pwa=1" target="_blank" rel="noreferrer" className="flex justify-center items-center text-sm">
        <FaInstagram className="hover:text-black" /> <span className="ml-1 mb-1"> rebel_akhill</span>
      </a>
    </footer>
  );
};

export default Footer;
