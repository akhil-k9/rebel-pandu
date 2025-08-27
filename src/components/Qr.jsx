import React from "react";

const Qr = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <img
        src="/images/qr.png"
        alt="QR code"
        className="w-60 h-60 object-contain border-4 border-gray-300 rounded-xl shadow-lg"
      />
    </div>
  );
};

export default Qr;
