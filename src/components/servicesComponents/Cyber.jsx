import React from "react";
import service from "../../assets/images/service/service.webp";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

function Cyber() {
  return (
    <>
      <div
        className={`relative box-border flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden bg-gray-800 font-inter ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${service})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text Section */}
        <div className="relative z-10 w-full max-w-xl px-6 text-left text-cWhite sm:px-10 lg:ml-16 lg:px-6">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Our Services</h1>
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
