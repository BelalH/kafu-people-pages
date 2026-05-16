import PageSEO from "../PageSEO";
import { PAGE_SEO } from "../../config/seo";
import usePageScrollSnap from "../../hooks/usePageScrollSnap";
import Cyber from "./Cyber";
import CyberService from "./CyberService";
import CtaFooterBlock from "../homeComponents/CtaFooterBlock";

export default function ServiceMainFile() {
  const seo = PAGE_SEO.services;
  usePageScrollSnap();

  return (
    <>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Cyber />
      <CyberService />
      <CtaFooterBlock />
    </>
  );
}
