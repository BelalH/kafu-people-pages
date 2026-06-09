import { Link } from "react-router-dom";
import BookMeetingButton from "../ui/BookMeetingButton";
import aiMachineIcon from "../../assets/images/homeServices/ai-machine.png";
import webDevelopmentIcon from "../../assets/images/homeServices/web-development.png";
import awsCloudIcon from "../../assets/images/homeServices/aws-cloud.png";
import { MdDoubleArrow } from "react-icons/md";

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Practical AI integrations, agents, and automation that fit your product — not hype for its own sake.",
    icon: aiMachineIcon,
    alt: "AI and machine learning",
  },
  {
    title: "Web Development",
    description:
      "Modern full-stack applications and corporate sites — performant, accessible, and ready to grow with you.",
    icon: webDevelopmentIcon,
    alt: "Web development",
  },
  {
    title: "AWS Cloud Solutions",
    description:
      "Secure, scalable cloud architecture and dashboards on AWS — built for reliability and cost awareness.",
    icon: awsCloudIcon,
    alt: "AWS cloud solutions",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-services-radial py-16 lg:py-24 font-inter text-cWhite">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cWhite">
          What we do
        </p>
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Our Services</h2>
        <p className="mx-auto mb-12 max-w-2xl text-base text-cWhite/90">
          End-to-end support for teams that need to ship — from architecture and
          development to cloud and AI.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map(({ title, description, icon, alt }) => (
            <div
              key={title}
              className="rounded-2xl bg-cWhite/10 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-cWhite/[0.15]"
            >
              <img
                src={icon}
                alt={alt}
                className="mb-6 h-20 w-20 object-contain sm:h-24 sm:w-24"
                loading="lazy"
                decoding="async"
              />
              <h3 className="mb-3 text-2xl font-bold text-cWhite sm:text-[1.75rem]">{title}</h3>
              <p className="text-sm leading-relaxed text-cWhite/90">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookMeetingButton buttonText="Book a Meeting" variant="secondary" />
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg border-2 border-cWhite px-6 py-3 text-sm font-semibold text-cWhite transition hover:bg-cWhite hover:text-primary"
          >
            All Services <MdDoubleArrow size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
