const AboutHero = () => {
  return (
    <section className="relative flex w-full min-h-[calc(100dvh-72px)] items-center overflow-hidden font-inter sm:min-h-[calc(100dvh-80px)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/about.webp)" }}
        role="img"
        aria-label="About Kafu People"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 w-full px-4 py-12 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl rounded-2xl bg-black/40 p-6 text-center sm:p-8">
          <h1 className="mb-4 text-2xl font-bold text-cWhite sm:text-3xl lg:text-4xl">
            Our mission
          </h1>
          <p className="text-base leading-relaxed text-cWhite/90 md:text-lg">
            At <span className="font-semibold text-cWhite">Kafu People</span>, we
            help startups and growing businesses leverage technology with clarity
            and craftsmanship. We deliver AI, cloud, and full-stack solutions that
            are scoped honestly, built to last, and aligned with your business
            goals — so you can ship faster and scale with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
