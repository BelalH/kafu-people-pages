/** Default hero video on Streamable (override with VITE_HERO_VIDEO_URL). */
export const HERO_VIDEO_URL =
  import.meta.env.VITE_HERO_VIDEO_URL?.trim() ||
  "https://streamable.com/mueba1";

export const HERO_POSTER_SRC = "/images/hero.webp";

const STREAMABLE_ID_RE = /streamable\.com\/(?:e\/)?([a-zA-Z0-9]+)/i;

export function isStreamableUrl(url) {
  return STREAMABLE_ID_RE.test(url);
}

/** Embed URL for background iframe (Streamable). */
export function getStreamableEmbedUrl(url = HERO_VIDEO_URL) {
  const match = url.match(STREAMABLE_ID_RE);
  if (!match) return null;
  return `https://streamable.com/e/${match[1]}?autoplay=1&muted=1&loop=1`;
}

/** Direct MP4/WebM URL for <video> (R2, CDN, or local public file). */
export function getDirectVideoSrc(url = HERO_VIDEO_URL) {
  if (!url || isStreamableUrl(url)) return null;
  return url;
}
