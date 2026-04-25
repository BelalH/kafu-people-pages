/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useCookieConsent } from "../../context/useCookieConsent";
import CookieFeatureFallback from "../cookies/CookieFeatureFallback";

const CalendlyPopup = ({ url, buttonText = "Book a Meeting" }) => {
  const { hydrated, allowFunctional } = useCookieConsent();

  useEffect(() => {
    if (!hydrated || !allowFunctional || !url) return undefined;

    const existing = document.querySelector(
      'script[data-kafu-calendly="true"]'
    );
    if (existing) return undefined;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.setAttribute("data-kafu-calendly", "true");
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [hydrated, allowFunctional, url]);

  if (!hydrated) {
    return (
      <div
        className="h-12 w-56 animate-pulse rounded-lg bg-gray-200"
        aria-hidden
      />
    );
  }

  if (!allowFunctional) {
    return (
      <CookieFeatureFallback
        title="Scheduling is disabled"
        description="Enable functional cookies in Cookie Preferences to load Calendly."
      />
    );
  }

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget(url);
    }
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-cWhite shadow-md transition hover:bg-blue-700 hover:shadow-lg"
      onClick={openCalendly}
    >
      <FaCalendarAlt className="h-5 w-5" />
      {buttonText}
    </button>
  );
};

export default CalendlyPopup;
