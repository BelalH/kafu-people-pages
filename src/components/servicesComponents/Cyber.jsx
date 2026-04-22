import React from "react";
import service from "../../assets/images/service/service.jpg";

function Cyber() {
  return (
    <>
      <div className="relative w-full h-[400px] bg-gray-800 flex items-center font-inter">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${service})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Section */}
        <div className="relative z-10 text-cWhite text-left ml-16 px-6 max-w-lg w-full">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg leading-relaxed">
            Turn your vision into reality with intelligent AI agents,
            fast‑launch SaaS MVPs, real‑time cloud dashboards, and high‑impact
            business websites.
          </p>
        </div>
      </div>
    </>
  );
}

export default Cyber;
