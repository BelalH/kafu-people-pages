import PageSEO from "../PageSEO";
import { PAGE_SEO } from "../../config/seo";
import Cyber from "./Cyber";
import CyberService from "./CyberService";
import CTABanner from "../homeComponents/CTABanner";

export default function ServiceMainFile() {
  const seo = PAGE_SEO.services;

  return (
    <div>
      <PageSEO
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
      />
      <Cyber />
      <CyberService />
      <CTABanner />
    </div>
  );
}
