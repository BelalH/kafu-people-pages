import React from "react";
import service from "../../assets/images/service/service.webp";
import { HERO_FLUSH_CLASS } from "../../constants/layout";

function Cyber() {
  return (
    <>
      <div
        className={`relative box-border min-h-[100dvh] w-full overflow-hidden bg-gray-800 font-inter ${HERO_FLUSH_CLASS}`}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{
            backgroundImage: `url(${service})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15" />

        {/* Text Section — below navbar, vertically centered in remaining viewport */}
        <div className="relative z-10 mt-[64px] flex h-[calc(100dvh-64px)] w-full items-center sm:mt-[72px] sm:h-[calc(100dvh-72px)]">
          <div className="w-full max-w-xl px-6 text-left text-cWhite drop-shadow-lg sm:ml-6 sm:px-10 lg:ml-24 lg:px-8 xl:ml-32">
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">Our Services</h1>
            <p className="text-lg leading-relaxed text-cWhite/95">
              Turn your vision into reality with intelligent AI agents,
              fast‑launch SaaS MVPs, real‑time cloud dashboards, and high‑impact
              business websites.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cyber;
