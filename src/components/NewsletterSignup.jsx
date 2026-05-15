import { HOME_SECTION_CLASS } from "../constants/homeLayout";

const NewsletterSignup = ({ fullViewport = false, embedded = false }) => {
  const layoutClass =
    "bg-surface text-slate-900 px-4 sm:px-8 font-inter flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12";

  if (embedded) {
    return (
      <div className={`${layoutClass} w-full max-w-6xl mx-auto py-6 sm:py-8`}>
        <div className="text-center md:text-left md:max-w-md">
          <h2 className="text-2xl font-bold mb-3">Stay in the loop</h2>
          <p className="text-muted text-sm sm:text-base">
            Subscribe for product updates, insights on AI and cloud, and news from
            Kafu People.
          </p>
        </div>

        <form className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Email for newsletter"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }

  return (
    <section
      className={`${layoutClass} ${fullViewport ? `py-8 ${HOME_SECTION_CLASS}` : "py-12"}`}
    >
      <div className="text-center md:text-left md:max-w-md">
        <h2 className="text-2xl font-bold mb-3">Stay in the loop</h2>
        <p className="text-muted text-sm sm:text-base">
          Subscribe for product updates, insights on AI and cloud, and news from
          Kafu People.
        </p>
      </div>

      <form className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border border-slate-200 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
