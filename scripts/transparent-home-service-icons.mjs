import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/assets/images/homeServices",
);

const files = ["ai-machine.png", "web-development.png", "aws-cloud.png"];

function isBlueBackground(r, g, b) {
  return b > 95 && b > r + 20 && b > g + 8 && r < 130 && g < 160;
}

for (const file of files) {
  const input = path.join(dir, file);
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  });

  const { width, height, channels } = info;
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (isBlueBackground(r, g, b)) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels } }).png().toFile(input);
  console.log("transparent:", file);
}
