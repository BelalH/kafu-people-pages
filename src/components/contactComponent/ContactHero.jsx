import form from "../../assets/images/contactUs/form.webp";
import { HERO_CONTENT_PT, HERO_FLUSH_CLASS } from "../../constants/layout";

const ContactHero = () => {
  return (
    <section
      className={`relative box-border flex min-h-[100dvh] w-full flex-col justify-center overflow-hidden font-inter ${HERO_FLUSH_CLASS} ${HERO_CONTENT_PT}`}
    >
      <img
        src={form}
        alt="Contact Kafu People"
        className="absolute inset-0 h-full w-full object-cover brightness-125"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full px-4 drop-shadow-lg sm:px-8 lg:px-16">
        <div className="mx-auto w-full max-w-3xl p-6 text-center sm:p-8">
          <h1 className="mb-4 text-4xl font-bold text-cWhite sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="text-base leading-relaxed text-cWhite/90 sm:text-lg">
            Book a meeting or send a message — we help startups and growing teams
            ship AI, cloud, and full-stack solutions. We typically respond within
            one business day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
