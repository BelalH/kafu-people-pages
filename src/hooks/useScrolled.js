import { useEffect, useState } from "react";

const DEFAULT_THRESHOLD = 12;

/**
 * True when the page has been scrolled past the threshold (not at top).
 */
export function useScrolled(threshold = DEFAULT_THRESHOLD, pathname) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, [threshold, pathname]);

  return isScrolled;
}
