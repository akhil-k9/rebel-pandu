import React, { useState } from "react";
import Modal from "react-modal";

const reels = [
  { thumbnail: "/images/1.png", video: "/videos/r1.mp4" },
  { thumbnail: "/images/2.png", video: "/videos/r2.mp4" },
];

Modal.setAppElement("#root");

const Reels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (video) => {
    setVideoSrc(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVideoSrc(""); // clear video so it stops playing
  };

  return (
    <section
      id="reels"
      className="py-20 bg-gradient-to-r from-purple-800 via-black to-pink-800 text-center text-white"
    >
      <h2 className="text-4xl font-bold mb-10">Reels</h2>
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {reels.map((reel, index) => (
          <img
            key={index}
            src={reel.thumbnail}
            alt="Reel Thumbnail"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => openModal(reel.video)}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Reel Modal"
        className="flex justify-center items-center outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-300"
          >
            ✕
          </button>

          <video
            src={videoSrc}
            controls
            autoPlay
            className="rounded-lg max-h-[90vh] max-w-[90vw] shadow-xl"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Reels;
