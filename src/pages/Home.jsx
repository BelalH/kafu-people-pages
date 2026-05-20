import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import Hero from "../components/homeComponents/Hero";
import Features from "../components/homeComponents/Features";
import ServicesSection from "../components/homeComponents/ServicesSection";
import TrainingPrograms from "../components/homeComponents/TrainingPrograms";
import AnimatedStats from "../components/AnimatedStats";
import Testimonials from "../components/homeComponents/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";

const Home = () => {
  const seo = PAGE_SEO.home;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Hero />
      <Features />
      <AnimatedStats />
      <ServicesSection />
      <Testimonials />
      <TrainingPrograms />
      <NewsletterSignup />
    </>
  );
};

export default Home;
