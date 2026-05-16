import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../Loader";
import { FULL_VIEWPORT_SNAP_SECTION } from "../../constants/homeLayout";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const categories = [
  "AI & Agentic Workflows",
  "SaaS & Startup MVPs",
  "Cloud-Native Dashboards",
  "Business & Corporate Websites",
];

const allProducts = [
  // {
  //   "product_id": "p001",
  //   "image": "/products/Agent Zero.webp",
  //   "name": "Agent Zero",
  //   "description": "An autonomous AI agent that runs in a secure virtual computer, capable of writing code, executing commands, browsing the web, and creating its own tools to complete complex tasks. It operates as a self-improving system that breaks down goals, runs multi-step workflows, and adapts its behavior based on results.",
  //   "category": "AI & Agentic Workflows",
  //   "url": "https://agent-zero.ai"
  // },
  {
    "product_id": "p007",
    "image": "/products/Echo3s.webp",
    "name": "Echo3s",
    "description": "Empowering independent authors and production companies to create professional audiobooks with cutting-edge AI voice technology.",
    "category": "AI & Agentic Workflows",
    "url": "https://echo3s.io/"
  },
  {
    "product_id": "p002",
    "image": "/products/Dustai.webp",
    "name": "Dustai",
    "description": "An enterprise-grade AI agent system that automates internal knowledge workflows, enabling teams to query, summarize, and act on organizational data.",
    "category": "AI & Agentic Workflows",
    "url": "https://dust.tt"
  },
  {
    "product_id": "p003",
    "image": "/products/Relevance AI.webp",
    "name": "Relevance AI",
    "description": "A visual agent orchestration platform for building data-driven AI workflows, enabling automation across research, analytics, and business operations.",
    "category": "AI & Agentic Workflows",
    "url": "https://relevanceai.com"
  },
  {
    "product_id": "p004",
    "image": "/products/Retool.webp",
    "name": "Retool",
    "description": "Popular among startups for building internal dashboards fast. Combines APIs, databases, and UI components in a drag-and-drop builder.",
    "category": "Cloud-Native Dashboards",
    "url": "https://retool.com/templates"
  },
  {
    "product_id": "p005",
    "image": "/products/AI Internal Tool Generator.webp",
    "name": "AI Internal Tool Generator",
    "description": "A tool that generates internal dashboards and apps using AI prompts. Designed for startups that need quick admin panels without full engineering effort.",
    "category": "SaaS & Startup MVPs",
    "url": "https://build0.dev"
  },
  {
    "product_id": "p006",
    "image": "/products/Dub.webp",
    "name": "Dub",
    "description": "A modern link shortener built for startups. Focuses on analytics, branded links, and API-first usage. Built like a developer tool rather than a marketing SaaS.",
    "category": "SaaS & Startup MVPs",
    "url": "https://dub.co"
  },
  {
    "product_id": "p008",
    "image": "/products/RadarOmega Cams.webp",
    "name": "RadarOmega Cams",
    "description": "RadarOmega Cams provides live camera feeds and accurate atmospheric data, including temperature, pressure, wind speed, and direction along with their trends. © SDS Weather LLC 2024.",
    "category": "Business & Corporate Websites",
    "url": "https://cycloneport.com/networkdashboard/"
  },
]

const ProductsCategories = () => {
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state
  const itemsPerPage = 3; // Display 4 products per page

  const filteredProducts = useMemo(() => {
    return (
      Array.isArray(products) &&
      products.filter((product) => product.category === selectedCategory)
    );
  }, [products, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    return (
      Array.isArray(filteredProducts) &&
      filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage,
      )
    );
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <section
      className={`flex w-full shrink-0 flex-col justify-center font-inter ${FULL_VIEWPORT_SNAP_SECTION}`}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-10 xl:px-14">
          <div className="mb-4 lg:hidden">
            <h3 className="mb-2 text-lg font-bold text-cDarkBlue">Categories</h3>
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`flex-shrink-0 px-4 py-2 my-4 rounded-lg shadow-md text-sm font-medium ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-cWhite"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="flex min-h-0 flex-1 flex-col items-stretch gap-6 lg:flex-row lg:gap-10">
            <aside className="w-full shrink-0 lg:w-64 xl:w-72 lg:py-2">
              <div className="hidden lg:block">
                <h3 className="text-lg font-bold text-cDarkBlue mb-4">
                  Categories:
                </h3>
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center gap-2 hover:shadow-lg transition cursor-pointer mb-3 border-b pt-3 pb-2 border-cDarkBlue"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className="form-radio accent-cDarkBlue"
                    />
                    <span className="text-base font-semibold text-cBlack">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </aside>

            <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
              <div className="flex flex-1 flex-col justify-center gap-8">
                {Array.isArray(paginatedProducts) &&
                  paginatedProducts.map((product) => (
                    <div
                      key={product.product_id || product._id}
                      className="flex w-full flex-col items-stretch overflow-hidden rounded-2xl bg-cWhite shadow-lg transition-all duration-300 hover:shadow-CPurple hover:shadow-lg md:flex-row md:items-center"
                    >
                      {/* Left Side - Text Content */}
                      <div className="group relative h-56 w-full shrink-0 sm:h-64 md:w-[38%] md:max-w-md lg:h-72 xl:h-80">
                        <img
                          src={`${product.image}`}
                          alt={""}
                          className="w-full h-full object-cover"
                        />
                        {product?.url && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
                            <a
                              href={product.url}
                              target="_blank"
                              rel="noreferrer"
                              className="relative px-5 py-2.5 rounded-xl bg-indigo-600 text-gray-300 font-extrabold shadow-2xl ring-2 ring-white/90 opacity-0 translate-y-1 transition-all duration-200 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-white"
                            >
                              Visit product
                            </a>
                          </div>
                        )}
                      </div>
                      <div className="flex w-full min-w-0 flex-1 flex-col justify-center p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-cDarkBlue mb-2">
                          {product.name}
                        </h3>
                        <p className="text-CPurple text-lg">
                          {product.description}
                        </p>
                      </div>

                      {/* Right Side - Image */}
                    </div>
                  ))}
              </div>

              {/* Pagination remains same */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 gap-2">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                        currentPage === index + 1
                          ? "bg-indigo-600 text-cWhite shadow-lg"
                          : "bg-textGray text-cWhite hover:bg-indigo-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsCategories;
