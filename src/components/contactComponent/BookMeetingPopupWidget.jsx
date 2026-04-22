import { PopupWidget } from "react-calendly";

export default function BookMeetingPopupWidget({ user, calenly }) {
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
