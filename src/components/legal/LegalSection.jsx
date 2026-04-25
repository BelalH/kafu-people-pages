import React from "react";

const LegalSection = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28 mb-10 md:mb-12">
    <h2 className="text-xl sm:text-2xl font-bold text-cDarkBlue mb-4">{title}</h2>
    <div className="space-y-4 text-textGray text-base sm:text-lg leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_strong]:text-cBlack [&_a]:text-cBrightBlue [&_a]:underline hover:[&_a]:text-CPurple">
      {children}
    </div>
  </section>
);

export default LegalSection;
