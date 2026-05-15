import { Link } from "react-router-dom";
import { useCookieConsent } from "../context/useCookieConsent";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import {
  FaShieldAlt,
  FaBrain,
  FaCloud,
  FaLink,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import {
  CONTACT_EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  LINKEDIN_URL,
} from "../constants/site";

const Footer = ({ embedded = false }) => {
  const { openCustomize } = useCookieConsent();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative text-cWhite py-10 sm:py-12 font-inter bg-slate-950 ${embedded ? "mt-auto shrink-0 w-full border-t border-slate-800/80" : ""}`}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-primary-dark/40 to-slate-900"
        aria-hidden
      />
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img
            src="/images/kafupeople.webp"
            alt="Kafu People Logo"
            className="mb-4 max-w-[45%] h-auto brightness-110"
          />
          <p className="text-sm text-slate-200 leading-relaxed">
            We partner with startups and teams to deliver AI, cloud, and
            full-stack solutions — with clear communication and craftsmanship you
            can trust.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li className="flex items-center hover:text-primary-light transition-colors">
              <FaShieldAlt className="mr-2 shrink-0" />
              AI & Agentic Workflows
            </li>
            <li className="flex items-center hover:text-primary-light transition-colors">
              <FaBrain className="mr-2 shrink-0" />
              SaaS & Startup MVPs
            </li>
            <li className="flex items-center hover:text-primary-light transition-colors">
              <FaCloud className="mr-2 shrink-0" />
              Cloud-Native Dashboards
            </li>
            <li className="flex items-center hover:text-primary-light transition-colors">
              <FaLink className="mr-2 shrink-0" />
              Business & Corporate Websites
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Business Hours</h3>
          <ul className="space-y-2 text-sm text-slate-200">
            <li>
              <span className="font-semibold text-accent-light flex items-center gap-1">
                <IoIosTime />
                Monday to Friday:
              </span>{" "}
              9:00 AM – 9:00 PM (CET)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-slate-200">
            <li>
              <span className="font-semibold text-accent-light flex items-center gap-1">
                <FaLocationDot />
                Address:
              </span>{" "}
              Amsterdam, NL
            </li>
            <li>
              <span className="font-semibold text-accent-light flex items-center gap-1">
                <FaWhatsapp className="shrink-0" />
                WhatsApp:
              </span>{" "}
              <a
                href={WHATSAPP_URL}
                className="text-white underline-offset-2 hover:underline hover:text-primary-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <span className="font-semibold text-accent-light flex items-center gap-1">
                <MdMarkEmailUnread />
                Email:
              </span>{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white underline-offset-2 hover:underline hover:text-primary-light transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <span className="font-semibold text-accent-light flex items-center gap-1">
                <FaLinkedin />
                LinkedIn:
              </span>{" "}
              <a
                href={LINKEDIN_URL}
                className="text-white underline-offset-2 hover:underline hover:text-primary-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kafu People
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-300">
        <p>Kafu People © {year}. All rights reserved.</p>
        <nav
          className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          aria-label="Legal and cookie preferences"
        >
          <Link
            to="/terms-of-service"
            className="hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={openCustomize}
            className="hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded bg-transparent border-0 cursor-pointer text-inherit text-sm"
          >
            Cookie Preferences
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
