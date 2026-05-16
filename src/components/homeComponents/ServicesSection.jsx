import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";
import { HOME_SECTION_SNAP } from "../../constants/homeLayout";

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Practical AI integrations, agents, and automation that fit your product — not hype for its own sake.",
    icon: "/images/AI.svg",
    alt: "AI and machine learning",
    iconTheme: "light",
  },
  {
    title: "AWS Cloud Solutions",
    description:
      "Secure, scalable cloud architecture and dashboards on AWS — built for reliability and cost awareness.",
    icon: "/images/cloud.png",
    alt: "Cloud computing",
    iconTheme: "dark",
  },
  {
    title: "Web Development",
    description:
      "Modern full-stack applications and corporate sites — performant, accessible, and ready to grow with you.",
    icon: "/images/web.png",
    alt: "Web development",
    iconTheme: "dark",
  },
];

const iconWrapperClass = {
  light:
    "bg-surface border border-slate-200",
  dark: "bg-slate-900 border border-slate-800",
};

const ServicesSection = () => {
  return (
    <section className={`py-12 bg-surface font-inter ${HOME_SECTION_SNAP}`}>
      <div className="max-w-7xl mx-auto text-center px-6">
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
          What we do
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
          Our Services
        </h2>
        <p className="text-muted text-base mb-12 max-w-2xl mx-auto">
          End-to-end support for teams that need to ship — from architecture and
          development to cloud and AI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-slate-200 shadow-sm hover:shadow-lg rounded-xl p-8 transform transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`mx-auto mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-2xl ${iconWrapperClass[service.iconTheme]}`}
              >
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="h-11 w-11 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="font-semibold text-xl text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <BookMeetingButton buttonText="Book a Meeting" />
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-white transition"
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
