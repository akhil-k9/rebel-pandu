import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Reels from "./components/Reels";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Photos />
      <Reels />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
