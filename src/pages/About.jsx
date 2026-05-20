import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import AboutHero from "../components/aboutComponenets/AboutHero";
import Vision from "../components/aboutComponenets/Vision";
import AnimatedStats from "../components/AnimatedStats";
import OurValue from "../components/aboutComponenets/OurValue";
import Achievements from "../components/Achievements";
import Testimonials from "../components/homeComponents/Testimonials";
import CTABanner from "../components/homeComponents/CTABanner";

const About = () => {
  const seo = PAGE_SEO.about;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <AboutHero />
      <AnimatedStats />
      <Vision />
      <OurValue />
      <Achievements />
      <Testimonials />
      <CTABanner />
    </>
  );
};

export default About;
