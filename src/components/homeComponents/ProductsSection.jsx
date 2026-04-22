import React from "react";
import {
  FaBrain,
  FaRobot,
  FaProjectDiagram,
  FaRocket,
  FaCloudUploadAlt,
  FaChartLine,
  FaTachometerAlt,
  FaWindowMaximize,
  FaStore,
  FaSearch,
  FaUsers,
  FaPalette,
} from "react-icons/fa";

const ProductsSection = () => {
  const products = [
    // AI & Agentic Workflows
    {
      id: 1,
      category: "AI & Agentic Workflows",
      title: "AgentForge",
      icon: <FaRobot className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Build and deploy custom AI agents that autonomously execute complex workflows, from customer support to data analysis, powered by LLMs and reasoning engines.",
    },
    {
      id: 2,
      category: "AI & Agentic Workflows",
      title: "FlowMind",
      icon: <FaProjectDiagram className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Create multi-agent systems where AI agents collaborate to automate business processes, handle decision-making, and adapt to changing conditions in real time.",
    },

    // SaaS & Startup MVPs
    {
      id: 3,
      category: "SaaS & Startup MVPs",
      title: "MVPForge",
      icon: <FaRocket className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Launch your SaaS idea in weeks with a functional, scalable MVP including user authentication, payment integration, and core features ready for real users.",
    },
    {
      id: 4,
      category: "SaaS & Startup MVPs",
      title: "SubManage",
      icon: <FaCloudUploadAlt className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Integrate seamless subscription billing with Stripe, Paddle, or Recurly – handles tiered pricing, invoicing, dunning workflows, and revenue analytics out of the box.",
    },

    // Cloud-Native Dashboards
    {
      id: 5,
      category: "Cloud-Native Dashboards",
      title: "LiveView",
      icon: <FaTachometerAlt className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Real-time interactive dashboards with live data streaming via WebSockets or SSE – perfect for monitoring, analytics, and operational visibility.",
    },
    {
      id: 6,
      category: "Cloud-Native Dashboards",
      title: "CloudCanvas",
      icon: <FaCloudUploadAlt className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Deploy dashboards on AWS, GCP, or Azure using containers and serverless functions – auto-scaling, high availability, and managed databases included.",
    },

    // Business & Corporate Websites
    {
      id: 7,
      category: "Business & Corporate Websites",
      title: "BrandForge",
      icon: <FaStore className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Modern, responsive corporate websites that reflect your brand identity, convert visitors into leads, and rank high on search engines.",
    },
    {
      id: 8,
      category: "Business & Corporate Websites",
      title: "ContentPilot",
      icon: <FaWindowMaximize className="h-6 w-6 text-red-500 mr-2" />,
      description:
        "Custom CMS (or WordPress-based) that lets your team update content, blog posts, and product catalogs without developer help.",
    },
  ];

  return (
    <div className="bg-cBrightBlue text-cWhite py-16 px-4 font-inter sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h3 className="uppercase text-sm font-semibold text-cWhite mb-4">
            Products
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-cWhite leading-tight mb-6">
            Innovative Products by KAFUPEOPLE
          </h2>
          <p className="text-sm sm:text-base text-cWhite mb-6 max-w-3xl mx-auto">
            Explore KAFUPEOPLE's suite of cutting-edge products designed to
            address the challenges of the modern IT landscape. With advanced
            features, our solutions deliver exceptional performance,
            reliability, and precision.
          </p>
        </div>

        {/* Products Grid */}
        <div className="space-y-12">
          {/* Group by Category */}
          {[
            "AI & Agentic Workflows",
            "SaaS & Startup MVPs",
            "Cloud-Native Dashboards",
            "Business & Corporate Websites",
          ].map((category) => (
            <div key={category}>
              <h4 className="text-xl sm:text-2xl font-bold text-cWhite mb-6">
                {category}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-cWhite text-cDarkBlue p-6 rounded-md shadow-lg hover:shadow-CPurple transform transition duration-500 hover:scale-105 hover:shadow-2xl"
                    >
                      <div className="flex items-center mb-4">
                        {product.icon}
                        <h5 className="text-lg font-bold">{product.title}</h5>
                      </div>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
