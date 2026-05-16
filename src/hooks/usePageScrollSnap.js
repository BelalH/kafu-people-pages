import { useEffect } from "react";

const SCROLL_SNAP_CLASSES = [
  "scroll-smooth",
  "snap-y",
  "snap-mandatory",
  "scroll-pt-[72px]",
  "sm:scroll-pt-20",
];

/** Enables vertical scroll snapping on the document (pair with snap-start sections). */
export default function usePageScrollSnap(enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    const html = document.documentElement;
    const body = document.body;
    html.classList.add(...SCROLL_SNAP_CLASSES);
    body.classList.add(...SCROLL_SNAP_CLASSES);

    return () => {
      html.classList.remove(...SCROLL_SNAP_CLASSES);
      body.classList.remove(...SCROLL_SNAP_CLASSES);
    };
  }, [enabled]);
}
