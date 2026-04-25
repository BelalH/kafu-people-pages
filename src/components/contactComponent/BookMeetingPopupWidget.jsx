/* eslint-disable react/prop-types -- props passed from parent forms */
import { PopupWidget } from "react-calendly";
import { useCookieConsent } from "../../context/useCookieConsent";
import CookieFeatureFallback from "../cookies/CookieFeatureFallback";

export default function BookMeetingPopupWidget({ user, calenly }) {
  const { hydrated, allowFunctional } = useCookieConsent();

  if (!hydrated) {
    return (
      <div
        className="h-14 w-full max-w-xs animate-pulse rounded-lg bg-gray-200"
        aria-hidden
      />
    );
  }

  if (!allowFunctional) {
    return (
      <CookieFeatureFallback
        title="Scheduling is disabled"
        description="Enable functional cookies to use the meeting scheduler."
      />
    );
  }

  return (
    <PopupWidget
      branding
      color="#00a2ff"
      pageSettings={{
        backgroundColor: "ffffff",
        hideEventTypeDetails: false,
        hideGdprBanner: true,
        hideLandingPageDetails: false,
        primaryColor: "00a2ff",
        textColor: "4d5055",
      }}
      prefill={{
        date: new Date(),
        name: user.name,
        email: user.email,
      }}
      rootElement={document.getElementById("root")}
      text="Schedule a meeting with us"
      textColor="#ffffff"
      url={calenly.url}
      utm={{
        utmSource: "Web",
      }}
    />
  );
}
