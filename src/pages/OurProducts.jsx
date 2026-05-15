import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import ProductsSection from "../components/ourProducts/ProductsSection";
import ProductsCategories from "../components/ourProducts/ProductsCategories";
import CTABanner from "../components/homeComponents/CTABanner";

const OurProducts = () => {
  const seo = PAGE_SEO.portfolio;

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <ProductsSection />
      <ProductsCategories />
      <CTABanner />
    </>
  );
};

export default OurProducts;
