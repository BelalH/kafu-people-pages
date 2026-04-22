import React from "react";
// import Rectangle from "../../assets/images/aboutUs/Rectangle.png"; // Adjust the path based on your folder structure

const AboutUs = () => {
  return (
    <div className="relative h-screen overflow-y-auto font-inter">
      {/* Scrollable Content */}
      <div className="relative z-10 bg-white pt-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* About Us Section */}
          <div className="text-justify px-4 sm:px-8 md:text-left md:px-16 lg:px-32">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
              Welcome to Kafu People, where practical engineering meets the
              future of intelligent business.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
              At Kafu People, we excel in delivering a focused spectrum of
              high-impact technology solutions, from{" "}
              <strong>full-stack web development</strong>
              and <strong>scalable AWS cloud architecture</strong> to{" "}
              <strong>advanced AI</strong> and{" "}
              <strong>agentic AI system integration</strong>. Our expertise also
              spans comprehensive <strong>AI transformation training</strong>{" "}
              and <strong>strategic MVP development</strong> for entrepreneurs,
              ensuring we address the evolving technical needs of our clients
              and empower them to move faster, reduce complexity, and thrive in
              today’s digital landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
