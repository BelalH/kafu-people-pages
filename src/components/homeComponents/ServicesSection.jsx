import { Link } from "react-router-dom";
import { LuRocket } from "react-icons/lu";
import BookMeetingButton from "../ui/BookMeetingButton";
import aiMachineIcon from "../../assets/images/homeServices/ai-machine.png";
import webDevelopmentIcon from "../../assets/images/homeServices/web-development.png";
import awsCloudIcon from "../../assets/images/homeServices/aws-cloud.png";
import { MdDoubleArrow } from "react-icons/md";

const services = [
  {
    title: "Autonomous AI & Intelligent Automation",
    description:
      "We design and deploy autonomous AI agents that integrate directly into your operations. Our cognitive AI solutions handle complex, multi-step business workflows to eliminate manual friction.",
    icon: aiMachineIcon,
    alt: "Autonomous AI & Intelligent Automation",
  },
  {
    title: "User-Centric Product Design & Engineering",
    description:
      "We merge world-class UI/UX design with robust software engineering. From initial wireframes to native mobile and web applications, we build digital products that look stunning and perform flawlessly.",
    icon: webDevelopmentIcon,
    alt: "User-Centric Product Design & Engineering",
  },
  {
    title: "Cloud Infrastructure & Lifecycle Support",
    description:
      "We architect secure, scalable AWS cloud environments and back them up with continuous technical support. We monitor your infrastructure 24/7 so your software stays fast, secure, and always online.",
    icon: awsCloudIcon,
    alt: "Cloud Infrastructure & Lifecycle Support",
  },
  {
    title: "Rapid MVP Development (No-Code / Low-Code)",
    description:
      "We accelerate your time-to-market using cutting-edge No-code and Low-code platforms. Launch your Minimum Viable Product (MVP) quickly, validate your ideas with real users, and save thousands in upfront development costs.",
    Icon: LuRocket,
    alt: "Rapid MVP Development",
  },
];

const iconWrapClass =
  "mb-6 flex h-20 w-20 shrink-0 items-center justify-start sm:h-24 sm:w-24";

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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map(({ title, description, icon, Icon, alt }) => (
            <div
              key={title}
              className="rounded-2xl bg-cWhite/10 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:bg-cWhite/[0.15]"
            >
              {icon ? (
                <img
                  src={icon}
                  alt={alt}
                  className={`${iconWrapClass} object-contain object-left`}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className={iconWrapClass}>
                  <Icon
                    className="h-14 w-14 text-cWhite sm:h-16 sm:w-16"
                    strokeWidth={1}
                    aria-hidden
                  />
                </div>
              )}
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
