/** Scroll-snap section without forcing full viewport height. */
export const HOME_SECTION_SNAP = "snap-start snap-always";

/** Full-viewport hero (only section that should fill the screen). */
export const HOME_HERO_CLASS =
  "min-h-screen snap-start snap-always flex flex-col justify-center";

/** @deprecated Use HOME_SECTION_SNAP or HOME_HERO_CLASS */
export const HOME_SECTION_CLASS = HOME_HERO_CLASS;

/** Inset gradient panel (stats, features, achievements on home). */
export const HOME_CONTAINED_GRADIENT =
  "max-w-6xl mx-auto w-full rounded-2xl overflow-hidden";

export const HOME_CONTAINED_GRADIENT_WIDE =
  "max-w-7xl mx-auto w-full rounded-2xl overflow-hidden";

/** Dark navy → subtle purple gradient (home sections, footer). */
export const DARK_SECTION_GRADIENT =
  "bg-gradient-to-br from-slate-950 via-slate-900 to-primary-dark/40";

/** Solid navy used for the section directly above the footer (swapped with footer gradient). */
export const SECTION_ABOVE_FOOTER_BG = "bg-slate-950";
