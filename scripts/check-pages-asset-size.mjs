/**
 * Cloudflare Pages rejects any single deployed file over 25 MiB.
 * @see https://developers.cloudflare.com/pages/platform/limits/
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 25 * 1024 * 1024;
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

if (!fs.existsSync(distDir)) {
  console.error("check-pages-asset-size: dist/ not found. Run vite build first.");
  process.exit(1);
}

const oversized = walk(distDir)
  .map((file) => ({ file, size: fs.statSync(file).size }))
  .filter(({ size }) => size > MAX_BYTES)
  .sort((a, b) => b.size - a.size);

if (oversized.length === 0) {
  console.log("check-pages-asset-size: all assets are within 25 MiB.");
  process.exit(0);
}

console.error("check-pages-asset-size: files exceed Cloudflare Pages 25 MiB limit:\n");
for (const { file, size } of oversized) {
  const rel = path.relative(root, file);
  console.error(`  ${rel}  ${(size / (1024 * 1024)).toFixed(2)} MiB`);
}
console.error(
  "\nCompress large files (see scripts/compress-hero-video.ps1) or host via R2 and set VITE_HERO_VIDEO_URL."
);
process.exit(1);
