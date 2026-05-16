import { HOME_SECTION_CLASS } from "../constants/homeLayout";

const COPY = {
  title: "Stay in the loop",
  description:
    "Subscribe for product updates, insights on AI and cloud, and news from Kafu People.",
};

export function NewsletterSubscribeForm({ variant = "footer" }) {
  const isFooter = variant === "footer";

  if (isFooter) {
    return (
      <form className="flex w-full min-w-0 flex-col gap-2 xl:flex-row xl:items-stretch xl:gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="min-w-0 w-full flex-1 px-3 py-2.5 text-sm border border-slate-200 bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Email for newsletter"
        />
        <button
          type="submit"
          className="w-full shrink-0 bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition whitespace-nowrap xl:w-auto"
        >
          Subscribe
        </button>
      </form>
    );
  }

  return (
    <div className="w-full max-w-lg">
      <h3 className="text-2xl font-bold mb-3 text-slate-900">{COPY.title}</h3>
      <p className="text-muted text-sm sm:text-base mb-4">{COPY.description}</p>
      <form className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border border-slate-200 bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

/** Standalone section — prefer footer subscribe when Footer is shown. */
const NewsletterSignup = ({ fullViewport = false }) => {
  return (
    <section
      className={`bg-surface text-slate-900 px-4 sm:px-8 font-inter flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 ${fullViewport ? `py-8 ${HOME_SECTION_CLASS}` : "py-12"}`}
    >
      <NewsletterSubscribeForm variant="section" />
    </section>
  );
};

export default NewsletterSignup;
