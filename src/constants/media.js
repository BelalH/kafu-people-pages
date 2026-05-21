/**
 * Hero background video. Set VITE_HERO_VIDEO_URL in Cloudflare Pages (or .env.local)
 * when hosting the file on R2/CDN. Falls back to /videos/hero.mp4 if under deploy limits.
 */
export const HERO_VIDEO_SRC =
  import.meta.env.VITE_HERO_VIDEO_URL?.trim() || "/videos/hero.mp4";

export const HERO_POSTER_SRC = "/images/hero.webp";
