# Compress hero.mp4 for Cloudflare Pages (max 25 MiB per file).
# Requires ffmpeg: winget install Gyan.FFmpeg  OR  choco install ffmpeg

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$mediaSource = Join-Path $root "media-source\hero.mp4"
$output = Join-Path $root "public\videos\hero.mp4"

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Error "ffmpeg not found. Install: winget install Gyan.FFmpeg"
}

if (-not (Test-Path $mediaSource)) {
  Write-Error "Place your source video at media-source\hero.mp4 (kept out of public/ so builds stay small)"
}

$inFile = $mediaSource
New-Item -ItemType Directory -Force -Path (Split-Path $output) | Out-Null

ffmpeg -y -i $inFile `
  -vf "scale='min(1920,iw)':-2" `
  -c:v libx264 -preset slow -crf 28 `
  -an `
  -movflags +faststart `
  $output

$size = (Get-Item $output).Length / 1MB
Write-Host ("Output: {0:N2} MB -> {1}" -f $size, $output)
if ($size -gt 25) {
  Write-Warning "Still over 25 MB. Try: -crf 32 or scale=1280:-2"
  exit 1
}
Write-Host "OK for Cloudflare Pages."
