import React, { useState } from "react";
import Modal from "react-modal";

const photos = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
];

Modal.setAppElement("#root");

const Photos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <section id="photos" className="py-20 bg-black text-center text-white">
      <h2 className="text-4xl font-bold mb-10">Photos</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt="Insta"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => openModal(photo)}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} // 🔹 ESC key or clicking outside
        shouldCloseOnOverlayClick={true} // 🔹 click background closes modal
        contentLabel="Photo Modal"
        className="flex justify-center items-center outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
      >
        <div className="relative">
          {/* Close button (X) */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full hover:bg-gray-300"
          >
            ✕
          </button>

          {/* Selected image */}
          <img
            src={selectedPhoto}
            alt="popup"
            className="rounded-lg max-h-[90vh] max-w-[90vw] shadow-xl"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Photos;
