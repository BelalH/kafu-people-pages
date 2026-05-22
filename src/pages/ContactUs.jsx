import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import ContactHero from "../components/contactComponent/ContactHero";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/contactComponent/MapSection";

const ContactUs = () => {
  const seo = PAGE_SEO.contact;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <ContactHero />
      <ContactSection />
      <MapSection />
    </>
  );
};

export default ContactUs;
