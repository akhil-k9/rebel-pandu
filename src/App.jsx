import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Reels from "./components/Reels";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Qr from "./components/Qr";

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Photos />
      <Reels />
      <About />
      <Qr/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
