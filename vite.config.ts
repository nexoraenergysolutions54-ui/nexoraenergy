import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/services" },
        { path: "/industries" },
        { path: "/projects" },
        { path: "/hse" },
        { path: "/news" },
        { path: "/careers" },
        { path: "/contact" },
      ],
    }),
    viteReact(),
    netlify(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
