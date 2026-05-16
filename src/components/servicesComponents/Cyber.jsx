import React from "react";
import service from "../../assets/images/service/service.jpg";
import { FULL_VIEWPORT_SNAP_SECTION } from "../../constants/homeLayout";

function Cyber() {
  return (
    <section
      className={`relative flex w-full items-center bg-gray-800 font-inter ${FULL_VIEWPORT_SNAP_SECTION}`}
    >
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
        <div className="relative z-10 w-full max-w-lg px-6 py-12 text-left text-cWhite sm:ml-16 lg:ml-24">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg leading-relaxed">
            Turn your vision into reality with intelligent AI agents,
            fast‑launch SaaS MVPs, real‑time cloud dashboards, and high‑impact
            business websites.
          </p>
        </div>
    </section>
  );
}

export default Cyber;
