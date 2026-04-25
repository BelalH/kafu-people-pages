/* eslint-disable react/prop-types -- small presentational helper */
import { useCookieConsent } from "../../context/useCookieConsent";

/**
 * Shown when a feature needs functional cookies and they are off or not yet chosen.
 */
export default function CookieFeatureFallback({
  title = "This feature needs optional cookies",
  description,
  className = "",
  variant = "light",
}) {
  const { openCustomize } = useCookieConsent();

  const shell =
    variant === "dark"
      ? "border-white/25 bg-black/30 text-cWhite"
      : "border-gray-300 bg-gray-50/90 text-gray-800";
  const descClass =
    variant === "dark" ? "text-cWhite/85" : "text-gray-600";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed p-6 text-center font-inter ${shell} ${className}`}
      role="region"
      aria-label="Cookie consent required"
    >
      <p className="text-sm font-semibold">{title}</p>
      {description ? (
        <p className={`max-w-md text-sm ${descClass}`}>{description}</p>
      ) : null}
      <button
        type="button"
        onClick={openCustomize}
        className="rounded-lg bg-[#33D6C5] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2bc4b4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#33D6C5] focus-visible:ring-offset-2"
      >
        Cookie Preferences
      </button>
    </div>
  );
}
