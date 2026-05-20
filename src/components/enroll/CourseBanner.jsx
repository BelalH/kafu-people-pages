import React from "react";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

function CourseBanner() {
  return (
    <div
      className={`relative box-border flex h-[500px] w-full items-center bg-cover bg-center font-inter text-cWhite ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
      style={{
        backgroundImage: "url('/images/enroll/enroll.svg')", // Replace with the actual path to your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase">
          Our Courses
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
        Explore courses like AI, Digital Marketing, Web Development, and Cyber Security to enhance your skills and stay ahead in the digital era.
        </p>

      </div>
    </div>
  );
}

export default CourseBanner;
