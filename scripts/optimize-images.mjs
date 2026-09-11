import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = "src/assets";
const target = path.join(root, "optimized");
await fs.mkdir(target, { recursive: true });
const files = (await fs.readdir(root)).filter((file) => /\.(png|jpe?g)$/i.test(file));
const totals = { before: 0, after: 0 };
for (const file of files) {
  const logo = file.includes("logo");
  const output = path.join(target, file.replace(/\.[^.]+$/, ".webp"));
  await sharp(path.join(root, file))
    .resize({ width: logo ? 500 : 1600, withoutEnlargement: true })
    .webp({ quality: logo ? 85 : 74, effort: 6 })
    .toFile(output);
  totals.before += (await fs.stat(path.join(root, file))).size;
  totals.after += (await fs.stat(output)).size;
}
for (const file of ["manpower-hero-crew-briefing.png", "contact-hero-project-conversation.png"]) {
  await sharp(path.join(root, file))
    .resize({ width: 768, height: 1200, fit: "cover", position: "centre" })
    .webp({ quality: 78, effort: 6 })
    .toFile(path.join(target, file.replace(".png", ".mobile.webp")));
}
console.log(totals);
