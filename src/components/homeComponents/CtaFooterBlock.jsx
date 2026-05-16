import CTABanner from "./CTABanner";
import Footer from "../Footer";
import {
  DARK_SECTION_GRADIENT,
  HOME_SECTION_SNAP,
} from "../../constants/homeLayout";

/**
 * CTA + footer in one background — no seam between sections.
 */
export default function CtaFooterBlock() {
  return (
    <section
      className={`${DARK_SECTION_GRADIENT} font-inter ${HOME_SECTION_SNAP} shrink-0 w-full`}
    >
      <CTABanner bare />
      <Footer embedded bare compactBottom />
    </section>
  );
}
