// import React, { useState } from "react";
// import Modal from "react-modal";

// const reels = [
//   { thumbnail: "/images/r1.png", video: "/videos/r1.mp4" },
//   { thumbnail: "/images/r2.png", video: "/videos/r2.mp4" },
// ];

// Modal.setAppElement("#root");

// const Reels = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [videoSrc, setVideoSrc] = useState("");

//   const openModal = (video) => {
//     setVideoSrc(video);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setVideoSrc(""); // clear video so it stops playing
//   };

//   return (
//     <section
//       id="reels"
//       className="py-20 bg-gradient-to-r from-purple-800 via-black to-pink-800 text-center text-white"
//     >
//       <h2 className="text-4xl font-bold mb-10">Reels</h2>
//       <div className="grid md:grid-cols-2 gap-6 px-6">
//         {reels.map((reel, index) => (
//           <img
//             key={index}
//             src={reel.thumbnail}
//             alt="Reel Thumbnail"
//             className="rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
//             onClick={() => openModal(reel.video)}
//           />
//         ))}
//       </div>

//       <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         shouldCloseOnOverlayClick={true}
//         contentLabel="Reel Modal"
//         className="flex justify-center items-center outline-none"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
//       >
//         <div className="relative">
//           {/* Close button */}
//           <button
//             onClick={closeModal}
//             className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full hover:bg-gray-300"
//           >
//             ✕
//           </button>

//           <video
//             src={videoSrc}
//             controls
//             autoPlay
//             className="rounded-lg max-h-[90vh] max-w-[90vw] shadow-xl"
//           />
//         </div>
//       </Modal>
//     </section>
//   );
// };

// export default Reels;


import React, { useEffect, useRef, useState } from "react";
import { Heart, MessageCircle, Share2, Volume2, VolumeX, Play, Pause } from "lucide-react"; // icons

const reels = [
  { video: "/videos/r1.mp4", caption: "Chilling vibes ✨", user: "rebel_pandu_official" },
  { video: "/videos/r2.mp4", caption: "Nature at its best 🌿", user: "rebel_pandu_official" },
];

const Reels = () => {
  const videoRefs = useRef([]);
  const [isPlaying, setIsPlaying] = useState({});
  const [isMuted, setIsMuted] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (video.paused) {
      video.play();
      setIsPlaying((prev) => ({ ...prev, [index]: true }));
    } else {
      video.pause();
      setIsPlaying((prev) => ({ ...prev, [index]: false }));
    }
  };

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    video.muted = !video.muted;
    setIsMuted((prev) => ({ ...prev, [index]: video.muted }));
  };

  return (
    <section
      id="reels"
      className="py-20 bg-gradient-to-r from-purple-800 via-black to-pink-800 flex flex-col items-center text-white"
    >
      <h2 className="text-4xl font-bold mb-10">Reels</h2>
      <div className="flex flex-col gap-10 items-center w-full">
        {reels.map((reel, index) => (
          <div key={index} className="relative w-[400px] h-[600px] rounded-2xl overflow-hidden shadow-lg">
            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={reel.video}
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
              onClick={() => togglePlay(index)} // tap to play/pause
            />

            {/* Overlay Controls */}
            <div className="absolute bottom-4 left-4 text-left">
              <p className="font-bold">@{reel.user}</p>
              <p className="text-sm">{reel.caption}</p>
            </div>

            {/* Right Side Buttons */}
            <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
              <button className="hover:scale-110 transition">
                <Heart className="w-7 h-7 text-white" />
              </button>
              <button className="hover:scale-110 transition">
                <MessageCircle className="w-7 h-7 text-white" />
              </button>
              <button className="hover:scale-110 transition">
                <Share2 className="w-7 h-7 text-white" />
              </button>
            </div>

            {/* Play/Pause & Mute */}
            <div className="absolute bottom-4 right-4 flex gap-3">
              <button
                onClick={() => togglePlay(index)}
                className="bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                {isPlaying[index] ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>
              <button
                onClick={() => toggleMute(index)}
                className="bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                {isMuted[index] ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reels;
