import React from "react";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

const NewsEventsSection = () => {
  return (
    <div
      className={`box-border flex min-h-[60vh] items-center justify-center bg-cover bg-center px-4 text-center font-inter lg:min-h-[90vh] ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
      style={{
        backgroundImage: `url('/images/newsAndEvents/news.svg')`, // Update with the correct path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg shadow-lg max-w-lg sm:max-w-xl md:max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cWhite mb-4">
          NEWS & EVENTS
        </h1>
        <p className="text-cWhite text-base sm:text-lg md:text-xl">
          Stay updated with the latest happenings at KAFUPEOPLE Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default NewsEventsSection;
