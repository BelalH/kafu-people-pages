import PageSEO from "../components/PageSEO";
import usePageScrollSnap from "../hooks/usePageScrollSnap";
import { PAGE_SEO } from "../config/seo";
import Hero from "../components/homeComponents/Hero";
import Features from "../components/homeComponents/Features";
import ServicesSection from "../components/homeComponents/ServicesSection";
import Achievements from "../components/Achievements";
import TrainingPrograms from "../components/homeComponents/TrainingPrograms";
import AnimatedStats from "../components/AnimatedStats";
import Testimonials from "../components/homeComponents/Testimonials";
import CtaFooterBlock from "../components/homeComponents/CtaFooterBlock";

const Home = () => {
  const seo = PAGE_SEO.home;

  usePageScrollSnap();

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Hero />
      <Features />
      <AnimatedStats flat />
      <ServicesSection />
      <Testimonials />
      <Achievements flat />
      <TrainingPrograms />
      <CtaFooterBlock />
    </>
  );
};

export default Home;
