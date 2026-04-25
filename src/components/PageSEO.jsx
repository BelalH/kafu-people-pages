import { useEffect } from "react";

const META_ATTR = "data-kafu-page-seo";

/**
 * Sets document title and injects basic SEO tags; removes them on unmount.
 */
const PageSEO = ({ title, description, canonicalPath }) => {
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
    }
    appendMeta({ property: "og:title", content: title });
    appendMeta({ property: "og:type", content: "website" });
    appendMeta({ name: "twitter:card", content: "summary_large_image" });
    appendMeta({ name: "twitter:title", content: title });
    if (description) {
      appendMeta({ name: "twitter:description", content: description });
    }

    const origin = "https://kafupeople.com";
    const url = canonicalPath ? `${origin}${canonicalPath}` : origin;
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
  }, [title, description, canonicalPath]);

  return null;
};

export default PageSEO;
