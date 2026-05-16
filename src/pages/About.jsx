import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import AboutUs from "../components/aboutComponenets/AboutUs";
import MissionSection from "../components/aboutComponenets/MissionSection";
import Vision from "../components/aboutComponenets/Vision";
import AnimatedStats from "../components/AnimatedStats";
import OurValue from "../components/aboutComponenets/OurValue";
import Achievements from "../components/Achievements";
import Testimonials from "../components/homeComponents/Testimonials";
import CtaFooterBlock from "../components/homeComponents/CtaFooterBlock";

const About = () => {
  const seo = PAGE_SEO.about;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <AboutUs />
      <MissionSection />
      <AnimatedStats />
      <Vision />
      <OurValue />
      <Achievements />
      <Testimonials />
      <CtaFooterBlock />
    </>
  );
};

export default About;
