import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";
import { HERO_FLUSH_CLASS } from "../../constants/layout";

export default function Hero() {
  return (
    <section
      className={`box-border w-full bg-white px-6 pb-12 pt-[88px] font-inter sm:px-10 sm:pb-16 sm:pt-[96px] lg:px-16 xl:px-32 ${HERO_FLUSH_CLASS}`}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10 lg:gap-16">
        <div className="w-full lg:flex-1 lg:min-w-0 flex justify-center lg:justify-end">
          <img
            src="/images/hero.webp"
            alt="Illustration of AI, cloud, DevOps, and full-stack development for growing businesses"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="w-full text-center lg:text-left lg:flex-1 lg:max-w-2xl">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
            Amsterdam · Remote worldwide
          </p>
          <h1 className="text-slate-900 font-medium text-lg sm:text-xl lg:text-2xl">
            Welcome to <span className="text-primary">Kafu People</span>
          </h1>
          <h2 className="text-slate-900 font-bold text-3xl sm:text-4xl lg:text-5xl mb-6 leading-snug">
            Build and scale with AI, cloud, and full-stack expertise
          </h2>
          <p className="text-muted text-base sm:text-lg mb-8 lg:mb-10 leading-relaxed">
            We help startups and growing businesses move from idea to
            production-ready products — with practical AI workflows, end-to-end
            development, and scalable AWS architecture. Clear communication,
            structured delivery, and outcomes you can measure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <BookMeetingButton buttonText="Book a Meeting" />
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-surface transition"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
