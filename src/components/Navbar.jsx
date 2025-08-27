import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-black/40 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
          Rebel Pandu
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#home" className="hover:text-pink-400 text-sm">Home</a></li>
          <li><a href="#photos" className="hover:text-pink-400 text-sm">Photos</a></li>
          <li><a href="#reels" className="hover:text-pink-400 text-sm">Reels</a></li>
          <li><a href="#about" className="hover:text-pink-400 text-sm">About</a></li>
          {/* <li><a href="#contact" className="hover:text-pink-400">Contact</a></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
