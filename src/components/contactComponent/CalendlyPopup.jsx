import { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CalendlyPopup = ({ url, buttonText = "Book a Meeting" }) => {
  useEffect(() => {
    // Load Calendly script once
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget(url);
    } else {
      console.error("Calendly script not loaded yet");
    }
  };

  return (
    <button
      type="button"
      className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-cWhite font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
      onClick={openCalendly}
    >
      <FaCalendarAlt className="w-5 h-5" />
      {buttonText}
    </button>
  );
};

export default CalendlyPopup;
