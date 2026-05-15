const NewsletterSignup = () => {
  return (
    <section className="bg-surface text-slate-900 py-12 px-4 sm:px-8 font-inter flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
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
