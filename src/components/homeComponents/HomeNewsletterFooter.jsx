import NewsletterSignup from "../NewsletterSignup";
import Footer from "../Footer";

/** Single snap section: newsletter + footer (home only). */
export default function HomeNewsletterFooter() {
  return (
    <section className="min-h-screen snap-start snap-always flex flex-col font-inter">
      <div className="flex flex-1 flex-col justify-center w-full min-h-0 py-6 sm:py-10">
        <NewsletterSignup embedded />
      </div>
      <Footer embedded />
    </section>
  );
}
