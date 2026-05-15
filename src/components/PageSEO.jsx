import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../config/seo";

const META_ATTR = "data-kafu-page-seo";

/**
 * Sets document title and injects SEO / social meta tags; removes them on unmount.
 */
const PageSEO = ({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
}) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const head = document.head;
    const created = [];

    const mark = (el) => {
      el.setAttribute(META_ATTR, "true");
      created.push(el);
    };

    const appendMeta = (attrs) => {
      const el = document.createElement("meta");
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      mark(el);
      head.appendChild(el);
    };

    if (description) {
      appendMeta({ name: "description", content: description });
      appendMeta({ property: "og:description", content: description });
      appendMeta({ name: "twitter:description", content: description });
    }
    appendMeta({ property: "og:title", content: title });
    appendMeta({ property: "og:type", content: "website" });
    appendMeta({ property: "og:image", content: ogImage });
    appendMeta({ name: "twitter:card", content: "summary_large_image" });
    appendMeta({ name: "twitter:title", content: title });
    appendMeta({ name: "twitter:image", content: ogImage });
    appendMeta({ name: "theme-color", content: "#4F46E5" });

    const url = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;
    appendMeta({ property: "og:url", content: url });

    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", url);
    mark(link);
    head.appendChild(link);

    return () => {
      created.forEach((node) => node.remove());
      document.title = previousTitle;
    };
  }, [title, description, canonicalPath, ogImage]);

  return null;
};

export default PageSEO;
