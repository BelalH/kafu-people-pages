import { Link } from "react-router-dom";
import { HOME_SECTION_CLASS } from "../../constants/homeLayout";

export default function Hero() {
  return (
    <section
      className={`bg-white w-full py-8 font-inter px-6 sm:px-10 lg:px-16 xl:px-32 ${HOME_SECTION_CLASS}`}
    >
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-3xl text-center">
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
          <div className="flex justify-center">
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
