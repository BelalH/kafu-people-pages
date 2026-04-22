import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { GrThreats } from "react-icons/gr";
import { BsHddNetworkFill } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { FcDataProtection } from "react-icons/fc";
import { FaUniversalAccess } from "react-icons/fa";
import { MdOnDeviceTraining } from "react-icons/md";
import { FcDataRecovery } from "react-icons/fc";
import { MdSupportAgent } from "react-icons/md";
import { SiTestinglibrary } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdSettingsApplications } from "react-icons/md";
import { SiSmartthings } from "react-icons/si";
import { MdManageHistory } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { SiQuantconnect } from "react-icons/si";
import { SiCyberdefenders } from "react-icons/si";

import {
  FaBrain,
  FaRobot,
  FaProjectDiagram,
  FaChartLine,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
  FaDatabase,
  FaCloudSun,
  FaWindowMaximize,
  FaTachometerAlt,
  FaStore,
  FaEnvelope,
  FaSearch,
  FaUsers,
  FaChartBar,
  FaPalette,
  FaCodeBranch,
  FaServer,
  FaLock,
  FaMagic,
} from "react-icons/fa";
import {
  MdOutlineAnalytics,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { SiTensorflow, SiLangchain } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

const services = [
  {
    title: "Custom AI Agent Development",
    description:
      "Design and deploy autonomous AI agents that perform complex tasks, from customer support to data analysis, using LLMs and custom reasoning engines.",
    icon: <FaRobot />,
  },
  {
    title: "Agentic Workflow Automation",
    description:
      "Build multi-agent systems where AI agents collaborate to automate business processes, handle decision-making, and execute workflows with minimal human intervention.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "LLM Fine-Tuning & Integration",
    description:
      "Fine-tune open-source or commercial LLMs on your domain data and integrate them seamlessly into your existing applications for intelligent assistance.",
    icon: <SiTensorflow />,
  },
  {
    title: "Retrieval-Augmented Generation (RAG)",
    description:
      "Implement RAG pipelines that ground AI responses in your proprietary knowledge bases, ensuring accurate, context-aware answers without hallucinations.",
    icon: <FaDatabase />,
  },
  {
    title: "AI Model Observability",
    description:
      "Monitor, evaluate, and improve your AI agents with tools for tracing, logging, and performance metrics, ensuring reliability and safety in production.",
    icon: <MdOutlineAnalytics />,
  },
  {
    title: "Prompt Engineering & Optimization",
    description:
      "Craft and optimize prompts for maximum accuracy and efficiency, including few-shot learning, chain-of-thought, and advanced prompt strategies.",
    icon: <FaMagic />,
  },
  {
    title: "Rapid MVP Development",
    description:
      "Launch your SaaS idea in weeks, not months. We build functional, scalable MVPs with user authentication, payment integration, and core features ready for real users.",
    icon: <FaRocket />,
  },
  {
    title: "Subscription & Billing Integration",
    description:
      "Integrate Stripe, Paddle, or Recurly for seamless subscription management, tiered pricing, invoicing, and dunning workflows.",
    icon: <FaLock />,
  },
  {
    title: "Multi-tenant Architecture",
    description:
      "Design and implement secure, scalable multi-tenant SaaS backends with isolated data, custom domains, and tenant-specific configurations.",
    icon: <FaCloudUploadAlt />,
  },
  {
    title: "User Analytics & Engagement",
    description:
      "Embed product analytics (Mixpanel, PostHog) and in-app messaging to track user behavior, run cohort analysis, and drive retention.",
    icon: <FaChartLine />,
  },
  {
    title: "SaaS Launch Toolkit",
    description:
      "Get a complete launch package including landing page, waitlist setup, email automation, and onboarding flows to convert signups into paying customers.",
    icon: <FaEnvelope />,
  },
  {
    title: "Scalable API Design",
    description:
      "Build RESTful or GraphQL APIs that can handle growth, with rate limiting, versioning, and comprehensive documentation using OpenAPI.",
    icon: <FaCodeBranch />,
  },
  {
    title: "Real-Time Dashboard Development",
    description:
      "Create interactive dashboards with live data streaming using WebSockets, Server-Sent Events, or GraphQL subscriptions. Perfect for monitoring, analytics, and operations.",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Cloud-Native Deployment",
    description:
      "Deploy your dashboards on AWS, GCP, or Azure using containers (Docker/Kubernetes), serverless functions, and managed databases for auto-scaling and high availability.",
    icon: <FaCloudSun />,
  },
  {
    title: "Custom Data Visualization",
    description:
      "Build beautiful, interactive charts and graphs with D3.js, Recharts, or Plotly, tailored to your KPIs, metrics, and business logic.",
    icon: <FaChartBar />,
  },
  {
    title: "Embedded Analytics",
    description:
      "Integrate analytics widgets into your existing product, allowing users to build custom reports, drill down into data, and export insights.",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Dashboard Performance Optimization",
    description:
      "Optimize query performance, caching strategies, and frontend rendering to handle millions of data points with sub-second load times.",
    icon: <FaServer />,
  },
  {
    title: "White-Label & Multi-tenant Dashboards",
    description:
      "Provide branded dashboards for each client with custom themes, user roles, and secure data isolation, all running on a shared cloud infrastructure.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "Modern Corporate Websites",
    description:
      "Design and develop responsive, fast, and SEO-friendly websites that reflect your brand identity and convert visitors into leads.",
    icon: <FaStore />,
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "Build custom or WordPress-based CMS solutions that let your team easily update content, blog posts, and product catalogs without developer help.",
    icon: <FaWindowMaximize />,
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "Improve search rankings with on-page SEO, structured data, Core Web Vitals optimization, and fast-loading pages using modern frameworks.",
    icon: <FaSearch />,
  },
  {
    title: "Landing Pages & Lead Generation",
    description:
      "Create high-converting landing pages with A/B testing, form integrations, and analytics to capture leads and measure campaign effectiveness.",
    icon: <FaUsers />,
  },
  {
    title: "Corporate Branding & UI/UX",
    description:
      "Establish a cohesive visual identity with custom UI components, design systems, and user-centered experiences that build trust and engagement.",
    icon: <FaPalette />,
  },
  {
    title: "Maintenance & Security",
    description:
      "Ongoing updates, backups, security monitoring, and DDoS protection to keep your business website safe, compliant, and always online.",
    icon: <FaShieldAlt />,
  },
];

const CyberService = () => {
  return (
    <div className="bg-cWhite py-10 px-4 md:px-8 lg:px-16 font-inter">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-cBlack mb-4">
          Services <span className="text-black">We Offer</span>
        </h2>
        <p className="text-base md:text-lg text-justify pr-20 pl-20 text-cBlack">
          At KAFUPEOPLE, we understand the power of technology to transform
          businesses. Our comprehensive suite of services spans AI‑driven
          automation, rapid SaaS and MVP development, cloud‑native dashboards,
          and modern corporate websites. We partner with you to build
          intelligent, scalable, and user‑centric digital solutions that drive
          growth, streamline operations, and elevate your brand in today’s
          competitive landscape.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 text-center shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer hover:border-cDarkBlue duration-300"
            style={{ backgroundColor: "#ffffff" }} // Keep the card background white
          >
            {/* Icon */}
            <div className="flex justify-center items-center text-5xl mb-4 text-cDarkBlue">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-cDarkBlue mb-2">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-cDarkBlue">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberService;
