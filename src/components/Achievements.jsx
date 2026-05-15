import { motion } from "framer-motion";
import {
  FaCogs,
  FaLaptopCode,
  FaLightbulb,
  FaCheckCircle,
  FaUserFriends,
  FaComments,
} from "react-icons/fa";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      icon: <FaCogs size={36} />,
      title: "Structured delivery",
      description:
        "We scope work clearly, communicate progress often, and adapt when requirements shift — so you always know where your project stands.",
    },
    {
      id: 2,
      icon: <FaLaptopCode size={36} />,
      title: "Full-stack & cloud",
      description:
        "From React frontends to AWS backends, APIs, and databases — we build systems designed to run in production, not just demos.",
    },
    {
      id: 3,
      icon: <FaLightbulb size={36} />,
      title: "AI that ships",
      description:
        "Agent workflows, integrations, and ML features grounded in your product goals — practical automation your team can maintain.",
    },
    {
      id: 4,
      icon: <FaComments size={36} />,
      title: "Clear communication",
      description:
        "Regular updates, honest timelines, and questions asked early — the kind of partnership our clients highlight in their reviews.",
    },
    {
      id: 5,
      icon: <FaCheckCircle size={36} />,
      title: "Quality you can review",
      description:
        "Clean, documented code and attention to detail on every engagement — from DEX tooling to enterprise migrations.",
    },
    {
      id: 6,
      icon: <FaUserFriends size={36} />,
      title: "Client-first focus",
      description:
        "We align with your business outcomes: speed to market, maintainability, and solutions that fit how your team actually works.",
    },
  ];

  return (
    <section className="w-full bg-slate-900 text-cWhite py-16 px-6 sm:px-10 lg:px-20 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase text-accent-light font-medium tracking-wide mb-2">
            Why choose us
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
            How we work with you
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              className="bg-slate-800/80 border border-slate-700 p-8 rounded-xl relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4 text-primary-light">{icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
