import { useCookieConsent } from "../../context/useCookieConsent";
import CookieFeatureFallback from "../cookies/CookieFeatureFallback";

const MAPS_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Amsterdam%2C+Netherlands";

const MapSection = () => {
  const { hydrated, allowFunctional } = useCookieConsent();

  if (!hydrated) {
    return (
      <div
        className="relative h-[70vh] w-full animate-pulse bg-gray-200 font-inter"
        aria-hidden
      />
    );
  }

  if (!allowFunctional) {
    return (
      <section
        className="relative flex h-[70vh] w-full items-center justify-center bg-gray-100 px-4 font-inter"
        aria-label="Office location map"
      >
        <div className="w-full max-w-lg">
          <CookieFeatureFallback
            title="Map is disabled"
            description="The embedded map loads third-party content. Enable functional cookies to view it here, or open the location in Google Maps."
            className="shadow-sm"
          />
          <a
            href={MAPS_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm font-semibold text-cBrightBlue underline hover:text-CPurple"
          >
            Open location in Google Maps (new tab)
          </a>
        </div>
      </section>
    );
  }

  return (
    <div
      className="relative h-[70vh] w-full font-inter"
      style={{
        width: "100%",
        height: "70vh",
      }}
    >
      <iframe
        title="KAFUPEOPLE office location — Amsterdam area"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.66565641426!2d4.821560303178677!3d52.35474184409316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1776537948033!5m2!1sen!2sus"
        className="absolute inset-0 h-full w-full"
        style={{
          border: 0,
          width: "100%",
          height: "100%",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapSection;
