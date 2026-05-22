import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { PopupButton } from "react-calendly";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
import { useCookieConsent } from "../context/useCookieConsent";
import CookieFeatureFallback from "./cookies/CookieFeatureFallback";
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  LINKEDIN_URL,
} from "../constants/site";

const ContactSection = () => {
  const { hydrated, allowFunctional } = useCookieConsent();

  return (
    <div className="flex min-h-screen flex-col bg-gray-100 py-12 font-inter md:flex-row sm:px-8 lg:px-24">
      {/* Left Section: Contact Info */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="text-center md:text-left">
          <h2 className="mb-6 text-3xl font-bold text-cDarkBlue sm:text-2xl">Get in Touch:</h2>
          <p className="mb-6 text-base text-[#330C2F] sm:text-sm">
            At <span className="font-semibold">Kafu People</span>, we help you
            ship AI, cloud, and full-stack solutions. Book a meeting or send a
            message — we typically respond within one business day.
          </p>
          <div className="mb-4 text-base">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cBrightBlue hover:text-CPurple">
              <p className="flex items-center justify-center text-cDarkBlue md:justify-start">
                <MdMarkEmailUnread className="mr-2" />
                Email:
              </p>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="mb-4">
            <a
              href={WHATSAPP_URL}
              className="text-cBrightBlue hover:text-CPurple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center justify-center text-cDarkBlue md:justify-start">
                <FaWhatsappSquare className="mr-2" />
                Phone:
              </p>
              {WHATSAPP_DISPLAY}
            </a>
          </div>
          <div className="mb-4">
            <a
              href={LINKEDIN_URL}
              className="text-cBrightBlue hover:text-CPurple"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex items-center justify-center text-cDarkBlue md:justify-start">
                <FaLinkedin className="mr-2" />
                LinkedIn:
              </p>
              Kafu People
            </a>
          </div>
          <div className="mb-4">
            <p className="flex justify-center text-cDarkBlue md:justify-start">
              <FaLocationDot className="mr-2" /> Address:
            </p>
            <p className="text-[#330C2F]">Amsterdam, NL</p>
          </div>
          <div className="mb-4">
            {!hydrated ? (
              <div
                className="mx-auto h-12 max-w-xs animate-pulse rounded-lg bg-gray-300 md:mx-0"
                aria-hidden
              />
            ) : allowFunctional ? (
              <PopupButton
                url={CALENDLY_URL}
                rootElement={document.getElementById("root")}
                branding
                color="4F46E5"
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideGdprBanner: true,
                  hideLandingPageDetails: false,
                  primaryColor: "4F46E5",
                  textColor: "4d5055",
                }}
                utm={{
                  utmSource: "Web",
                }}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-cWhite font-semibold rounded-lg shadow-md hover:bg-primary-dark hover:shadow-lg transition duration-300"
                text="Book a Meeting"
              />
            ) : (
              <CookieFeatureFallback
                title="Scheduling is disabled"
                description="Meeting booking uses functional cookies. Enable them in Cookie Preferences, or reach us by email or phone above."
                className="max-w-sm md:mx-0"
              />
            )}
          </div>
        </div>
      </div>

      {/* Right Section: Contact Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <form className="w-full rounded-2xl bg-cWhite p-6 shadow-lg sm:w-[90%] md:w-[400px]">
          <h2 className="text-2xl font-bold mb-3 text-center sm:text-xl">
            Contact Form:
          </h2>
          <p className="mb-3 text-center sm:text-sm">
            For any inquiries, please fill out the form below, and we will get
            back to you as soon as possible.
          </p>
          <div className="mb-4 w-full">
            <label
              className="block text-base font-medium mb-2 text-cDarkBlue"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-base font-medium mb-2 text-cDarkBlue"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-base font-medium mb-2 text-cDarkBlue"
              htmlFor="phone"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Phone"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label
              className="block text-cDarkBlue text-base font-medium mb-2"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="w-full p-2 border rounded transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-CPurple focus:scale-105"
              placeholder="Your message here..."
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-cDarkBlue to-CPurple text-cWhite font-semibold rounded hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
