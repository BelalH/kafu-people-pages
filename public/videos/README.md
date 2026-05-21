# Hero video

Cloudflare Pages allows **at most 25 MiB per file**. Do not commit videos larger than that.

## Option A — Compress and deploy with the site

1. Put the full-quality file at `media-source/hero.mp4` (not in `public/`)
2. Install [ffmpeg](https://ffmpeg.org/download.html)
3. From the repo root: `.\scripts\compress-hero-video.ps1`
4. Confirm `public/videos/hero.mp4` is under 25 MB, then `git add -f public/videos/hero.mp4`

## Option B — Host on R2 / CDN (recommended for large files)

1. Upload `hero.mp4` to a public R2 bucket (or other CDN)
2. In **Cloudflare Pages → Settings → Environment variables**, set:
   - `VITE_HERO_VIDEO_URL` = `https://your-cdn.example.com/hero.mp4`
3. Do not commit large `hero.mp4` files to git (see `.gitignore`)

The home hero uses `hero.webp` as a poster/fallback when the video is unavailable.
