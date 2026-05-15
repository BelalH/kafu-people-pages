import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import HelpSection from "../components/contactComponent/HelpSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/contactComponent/MapSection";
import NewsletterSignup from "../components/NewsletterSignup";

const ContactUs = () => {
  const seo = PAGE_SEO.contact;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <HelpSection />
      <ContactSection />
      <MapSection />
      <NewsletterSignup />
    </>
  );
};

export default ContactUs;
