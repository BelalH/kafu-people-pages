import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../constants/site";

const defaultDescription =
  "Kafu People helps startups and growing businesses ship AI-powered products, cloud-native apps, and full-stack MVPs — from idea to production.";

export const PAGE_SEO = {
  home: {
    title: `${SITE_NAME} | AI, Cloud & Full-Stack Development`,
    description: defaultDescription,
    canonicalPath: "/",
  },
  about: {
    title: `About Us | ${SITE_NAME}`,
    description:
      "Learn how Kafu People partners with startups and teams across Europe and beyond to deliver practical AI, cloud, and software solutions.",
    canonicalPath: "/about",
  },
  contact: {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Book a meeting or reach Kafu People in Amsterdam. We respond quickly and work with clients worldwide.",
    canonicalPath: "/contact",
  },
  portfolio: {
    title: `Portfolio | ${SITE_NAME}`,
    description:
      "Explore products and projects built by Kafu People — SaaS MVPs, dashboards, integrations, and more.",
    canonicalPath: "/portfolio",
  },
  services: {
    title: `Services | ${SITE_NAME}`,
    description:
      "AI & agentic workflows, SaaS MVPs, AWS cloud architecture, and business websites tailored to your stage of growth.",
    canonicalPath: "/services",
  },
  news: {
    title: `News & Events | ${SITE_NAME}`,
    description:
      "Latest news, events, and insights from Kafu People on AI, cloud, and modern software delivery.",
    canonicalPath: "/newsAndEvents",
  },
  blog: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Articles and updates from Kafu People on technology, product development, and digital transformation.",
    canonicalPath: "/blogs",
  },
  terms: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Terms of Service for ${SITE_NAME}.`,
    canonicalPath: "/terms-of-service",
  },
  privacy: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy Policy for ${SITE_NAME}.`,
    canonicalPath: "/privacy-policy",
  },
};

export { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "../constants/site";
export { defaultDescription };
