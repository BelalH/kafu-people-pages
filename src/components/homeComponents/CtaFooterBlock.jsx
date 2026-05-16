import CTABanner from "./CTABanner";
import Footer from "../Footer";
import {
  DARK_SECTION_GRADIENT,
  HOME_SECTION_CLASS,
} from "../../constants/homeLayout";

/**
 * CTA + footer in one background — no seam between sections.
 */
export default function CtaFooterBlock({ fullViewport = false }) {
  return (
    <section
      className={`${DARK_SECTION_GRADIENT} font-inter snap-start snap-always shrink-0 w-full ${
        fullViewport
          ? `${HOME_SECTION_CLASS} flex flex-col justify-between pt-8 pb-2`
          : ""
      }`}
    >
      <CTABanner
        bare
        className={fullViewport ? "flex flex-1 flex-col justify-center" : undefined}
      />
      <Footer embedded bare compactBottom={fullViewport} />
    </section>
  );
}
