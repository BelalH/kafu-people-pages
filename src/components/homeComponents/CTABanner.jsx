import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";

const CTABanner = () => {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 py-16 px-4 sm:px-8 lg:px-24 font-inter">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to move from idea to production?
        </h2>
        <p className="text-slate-200 mb-8 text-base sm:text-lg">
          Book a free 30-minute call. We will discuss your goals, timeline, and
          how Kafu People can help you ship with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/80 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
