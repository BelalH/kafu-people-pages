import { useEffect } from "react";
import PageSEO from "../components/PageSEO";
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

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("scroll-smooth", "snap-y", "snap-mandatory", "scroll-pt-[72px]", "sm:scroll-pt-20");
    return () => {
      html.classList.remove(
        "scroll-smooth",
        "snap-y",
        "snap-mandatory",
        "scroll-pt-[72px]",
        "sm:scroll-pt-20",
      );
    };
  }, []);

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Hero />
      <Features />
      <AnimatedStats fullViewport />
      <ServicesSection />
      <Testimonials />
      <Achievements fullViewport />
      <TrainingPrograms />
      <CtaFooterBlock fullViewport />
    </>
  );
};

export default Home;
