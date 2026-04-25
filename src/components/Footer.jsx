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
} from "react-icons/fa"; // Import icons
import { FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Import WhatsApp icon
import footer from "../assets/images/footer.png";

const Footer = () => {
  const { openCustomize } = useCookieConsent();

  return (
    <footer
      className="text-cWhite py-8 font-inter"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src="/images/kafupeople-footer.png" // Replace with your logo URL
            alt="Kafu-People Logo"
            className="mb-4 max-w-[45%] h-auto"
          />
          <p className="text-sm text-lightBlue">
            Join us on a journey of innovation and discovery as we navigate the
            ever-evolving landscape of technology together. Welcome to
            KAFUPEOPLE – where the future of technology begins.
          </p>
        </div>

        {/* Services */}
        <div className="">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-lightBlue">
            <li>
              <div className="flex items-center hover:text-CPurple transition-colors duration-300">
                <FaShieldAlt className="mr-2" />
                AI & Agentic Workflows
              </div>
            </li>
            <li>
              <div className="flex items-center hover:text-CPurple transition-colors duration-300">
                <FaBrain className="mr-2" />
                SaaS & Startup MVPs
              </div>
            </li>
            <li>
              <div className="flex items-center hover:text-CPurple transition-colors duration-300">
                <FaCloud className="mr-2" />
                Cloud-Native Dashboards
              </div>
            </li>
            <li>
              <div className="flex items-center hover:text-CPurple transition-colors duration-300">
                <FaLink className="mr-2" />
                Business & Corporate Websites
              </div>
            </li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-lg font-bold mb-4">Business Hours</h3>
          <ul className="space-y-2 text-sm text-lightBlue">
            <li>
              <span className="font-semibold  text-[#983139] flex items-center">
                <IoIosTime />
                Monday to Friday:
              </span>{" "}
              9:00 AM - 9:00 PM
            </li>
            {/* <li>
              <span className="font-semibold flex text-[#983139] flez items-center">
                <IoIosTime />
                Saturday:
              </span>{" "}
              10:00 AM - 6:00 PM
            </li>
            <li>
              <span className="font-semibold flex text-[#983139]  items-center">
                <IoIosTime />
                Sunday:
              </span>{" "}
              10:00 AM - 6:00 PM
            </li> */}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-lightBlue">
            <li>
              <span className="font-semibold flex text-[#983139]">
                <FaLocationDot />
                Address:
              </span>{" "}
              Amsterdam, NL
            </li>
            <li>
              <span className="font-semibold text-[#983139] flex items-center">
                {" "}
                <FaWhatsapp className="mr-2" />
                Phone:
              </span>{" "}
              <a
                href="https://wa.me/923334471066"
                className="text-blue-400 hover:underline hover:text-CPurple flex items-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                +31 6 13913024
              </a>
            </li>
            <li className="hover:text-CPurple  transition-colors duration-300">
              <span className="font-semibold text-[#983139] flex items-center ">
                <MdMarkEmailUnread className="mr-2" /> Email:
              </span>{" "}
              <a
                href="mailto:hello@kafupeople.com"
                className="text-blue-400 hover:underline"
              >
                hello@kafupeople.com
              </a>
            </li>
            <li className="hover:text-CPurple transition-colors duration-300">
              <span className="font-semibold text-[#983139] flex items-center">
                <FaLinkedin className="mr-2" />
                LinkedIn:
              </span>{" "}
              <a
                href="https://www.linkedin.com/company/kafu-people/"
                className="text-blue-400 hover:underline hover:text-CPurple transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kafu People
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-textGray text-textGray mt-8  pt-4 text-center text-sm">
        <p>KAFU PEOPLE Copyright © 2020. All rights reserved.</p>
        <nav
          className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          aria-label="Legal and cookie preferences"
        >
          <Link
            to="/terms-of-service"
            className="hover:underline hover:text-cWhite focus:outline-none focus-visible:ring-2 focus-visible:ring-CPurple rounded"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:underline hover:text-cWhite focus:outline-none focus-visible:ring-2 focus-visible:ring-CPurple rounded"
          >
            Privacy Policy
          </Link>
          <button
            type="button"
            onClick={openCustomize}
            className="hover:underline hover:text-cWhite focus:outline-none focus-visible:ring-2 focus-visible:ring-CPurple rounded bg-transparent border-0 cursor-pointer text-inherit font-inherit text-sm"
          >
            Cookie Preferences
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
