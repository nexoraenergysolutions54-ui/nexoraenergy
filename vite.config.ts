import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: {
    watch: {
      ignored: ["**/.output/**", "**/dist/**"],
    },
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
        // Crawled anchor links (e.g. "/about#collaborations") resolve to the
        // same page as their base path - a browser never sends the fragment
        // to the server, so prerendering it separately would just be dead
        // output. Skip anything with a hash instead of crawling it as a page.
        filter: (page) => !page.path.includes("#"),
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/manpower" },
        { path: "/industrial-services" },
        { path: "/products" },
        { path: "/industries" },
        { path: "/partners" },
        { path: "/careers" },
        { path: "/contact" },
        { path: "/services" },
        { path: "/hse" },
        { path: "/news" },
        { path: "/industries/oil-and-gas" },
        { path: "/industries/lng" },
        { path: "/industries/petrochemical" },
        { path: "/industries/infrastructure" },
        { path: "/industries/manufacturing" },
        { path: "/industries/epc" },
        { path: "/services/manpower-supply" },
        { path: "/services/shutdown-support" },
        { path: "/services/maintenance-support" },
        { path: "/services/procurement-support" },
        { path: "/services/project-support" },
        { path: "/services/engineering-support" },
      ],
    }),
    nitro({ preset: "vercel" }),
    viteReact(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
