/**
 * Post-build script: injects og:image meta tags into every prerendered HTML file.
 *
 * TanStack Start / React 19 SSR silently drops <meta property="og:image"> tags
 * during prerendering. This script patches the static output directly so that
 * WhatsApp, Facebook, LinkedIn, and other crawlers see the correct image.
 *
 * Run automatically via the "postbuild" npm script after `vite build`.
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://www.nexoraqa.com";
const OG_IMAGE = `${SITE_URL}/og-nexora-energy.jpg`;

const INJECT = [
  `<meta property="og:image" content="${OG_IMAGE}">`,
  `<meta property="og:image:secure_url" content="${OG_IMAGE}">`,
  `<meta property="og:image:type" content="image/jpeg">`,
  `<meta property="og:image:width" content="1200">`,
  `<meta property="og:image:height" content="630">`,
  `<meta property="og:image:alt" content="Nexora Energy Solutions - Qatar &amp; GCC Technical Manpower">`,
  `<meta name="twitter:image" content="${OG_IMAGE}">`,
].join("\n  ");

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return; // directory doesn't exist â€” skip silently
  }

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name.endsWith(".html")) {
      let html = readFileSync(fullPath, "utf-8");
      if (!html.includes("og:image")) {
        html = html.replace("</head>", `  ${INJECT}\n</head>`);
        writeFileSync(fullPath, html, "utf-8");
        console.log(`[og-inject] patched ${fullPath.replace(process.cwd(), ".")}`);
      }
    }
  }
}

// TanStack Start + Nitro writes prerendered HTML to .output/public/
walk(join(process.cwd(), ".output", "public"));

console.log("[og-inject] done");


