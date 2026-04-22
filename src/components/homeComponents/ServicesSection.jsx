import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-[34px] font-bold text-customBlue mb-4">
          Our Services
        </h2>
        <p className="text-customBlue text-base mb-12">
          We offer an extensive array of IT services to cater to your unique
          requirements.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-cBrightBlue  shadow-lg hover:shadow-CPurple rounded-lg p-6 sm:p-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:mx-4">
            <div className="flex justify-center mb-4">
              <img
                src={"/images/AI.png"}
                alt="Artificial Intelligence"
                className="h-16"
              />
            </div>
            <h3 className="font-semibold text-2xl text-cWhite mb-2">
              AI & Machine Learning
            </h3>
            <p className="text-cWhite font-thin mb-4">
              Implement AI technologies to drive innovation and efficiency.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-cBrightBlue shadow-lg hover:shadow-CPurple rounded-lg p-6 sm:p-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:mx-4">
            <div className="flex justify-center mb-4">
              <img
                src={"/images/cloud.png"}
                alt="Cybersecurity"
                className="h-16"
              />
            </div>
            <h3 className="font-semibold text-2xl text-cWhite mb-2">
              AWS Cloud Solutions
            </h3>
            <p className="text-cWhite font-thin mb-4">
              Protect your digital assets with our robust cybersecurity
              measures.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-cBrightBlue shadow-lg hover:shadow-CPurple rounded-lg p-6 sm:p-4 hover:shadow-2xl transform transition-all duration-300 hover:scale-105 sm:mx-4">
            <div className="flex justify-center mb-4">
              <img src={"/images/web.png"} alt="WordPress" className="h-16" />
            </div>
            <h3 className="font-semibold text-2xl text-cWhite mb-2">
              WEB Development
            </h3>
            <p className="text-cWhite font-thin mb-4">
              Create reliable and scalable connections with our advanced
              networking solutions.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Link to="/services">
            <button className="bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-medium py-2 px-6 rounded shadow-lg hover:opacity-90">
              All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
