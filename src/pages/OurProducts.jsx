import PageSEO from "../components/PageSEO";
import { PAGE_SEO } from "../config/seo";
import usePageScrollSnap from "../hooks/usePageScrollSnap";
import ProductsSection from "../components/ourProducts/ProductsSection";
import ProductsCategories from "../components/ourProducts/ProductsCategories";
import CtaFooterBlock from "../components/homeComponents/CtaFooterBlock";

const OurProducts = () => {
  const seo = PAGE_SEO.portfolio;
  usePageScrollSnap();

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <ProductsSection />
      <ProductsCategories />
      <CtaFooterBlock />
    </>
  );
};

export default OurProducts;
