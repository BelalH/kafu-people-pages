/* eslint-disable react/prop-types */
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useCookieConsent } from "../../context/useCookieConsent";
import CookieFeatureFallback from "../cookies/CookieFeatureFallback";
import {
  CALENDLY_URL,
  CALENDLY_PAGE_SETTINGS,
} from "../../constants/site";

const DEFAULT_CLASS =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg";

export default function CalendlyPopup({
  url = CALENDLY_URL,
  buttonText = "Book a Meeting",
  user,
  pageSettings = CALENDLY_PAGE_SETTINGS,
  utm = { utmSource: "Web" },
  className = DEFAULT_CLASS,
}) {
  const { hydrated, allowFunctional } = useCookieConsent();
  const [open, setOpen] = useState(false);

  useCalendlyEventListener({
    onEventScheduled: () => setOpen(false),
  });

  useEffect(() => {
    if (open) {
      document.body.classList.add("calendly-popup-open");
    } else {
      document.body.classList.remove("calendly-popup-open");
    }
  }, [open]);

  if (!hydrated) {
    return (
      <div
        className={`inline-flex items-center justify-center gap-2 rounded-lg bg-gray-200 px-6 py-3 text-sm font-semibold text-transparent animate-pulse ${className}`}
        aria-hidden
      >
        {buttonText}
      </div>
    );
  }

  if (!allowFunctional) {
    return (
      <CookieFeatureFallback
        title="Scheduling is disabled"
        description="Enable functional cookies in Cookie Preferences to load Calendly."
        className={className}
      />
    );
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <FaCalendarAlt className="h-5 w-5 shrink-0" />
        {buttonText}
      </button>
      <PopupModal
        url={url}
        open={open}
        onModalClose={() => setOpen(false)}
        pageSettings={pageSettings}
        prefill={
          user
            ? {
                name: user.name,
                email: user.email,
              }
            : undefined
        }
        rootElement={document.getElementById("root")}
        utm={utm}
      />
    </>
  );
}
