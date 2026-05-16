import { AiFillProduct } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";
import {
  DARK_SECTION_GRADIENT,
  HOME_SECTION_SNAP,
} from "../../constants/homeLayout";

const items = [
  {
    id: 1,
    icon: <AiFillProduct />,
    title: "Our Products",
    description:
      "Explore SaaS tools, dashboards, and integrations we have built for startups and teams — from MVPs to production systems.",
    cta: "View Portfolio",
    link: "/portfolio",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    title: "Our Services",
    description:
      "AI workflows, cloud architecture, and full-stack development tailored to your stage — with clear scope, communication, and delivery.",
    cta: "Explore Services",
    link: "/services",
  },
];

const Features = () => {
  return (
    <section
      className={`w-full ${DARK_SECTION_GRADIENT} text-cWhite font-inter ${HOME_SECTION_SNAP} py-14 px-4 sm:px-8`}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group flex flex-col items-center text-center px-4 py-6 no-underline transition hover:opacity-95"
          >
            <div className="text-4xl sm:text-5xl mb-4 text-primary-light flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 text-white">{item.title}</h3>
            <p className="text-sm sm:text-base text-slate-200 mb-6">
              {item.description}
            </p>
            <span className="text-sm font-semibold text-primary-light group-hover:text-white transition-colors">
              {item.cta} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Features;
