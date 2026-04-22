import React from "react";

const MapSection = () => {
  return (
    <div
      className="relative w-full h-[70vh] font-inter"
      style={{
        width: "100%",
        height: "70vh", // Fallback inline style in case Tailwind fails
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.66565641426!2d4.821560303178677!3d52.35474184409316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1776537948033!5m2!1sen!2sus"
        className="absolute inset-0 w-full h-full"
        style={{
          border: 0,
          width: "100%", // Ensures iframe takes full width
          height: "100%", // Ensures iframe takes full height
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
