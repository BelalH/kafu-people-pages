import vision from "../../assets/images/aboutUs/vision.svg";

const Vision = () => {
  return (
    <div className="flex flex-col-reverse font-inter md:flex-row items-center bg-surface px-4 py-12 lg:mx-20 sm:mx-8 md:px-8 gap-y-8">
      <div className="flex-1 flex justify-center items-center">
        <img
          src={vision}
          alt="Vision illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>
      <div className="flex-1 md:pr-8 mx-6 sm:text-left">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Our vision</h2>
        <p className="text-base md:text-lg text-muted leading-relaxed">
          We aim to be a trusted technology partner for startups and growing
          businesses in Europe and beyond — known for shipping reliable
          software, communicating clearly, and helping teams turn complex ideas
          into products that work in the real world. We measure success by your
          outcomes: faster delivery, maintainable code, and systems you can scale
          with confidence.
        </p>
      </div>
    </div>
  );
};

export default Vision;
