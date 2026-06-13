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
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/manpower" },
        { path: "/industrial-services" },
        { path: "/products" },
        { path: "/industries" },
        { path: "/projects" },
        { path: "/partners" },
        { path: "/careers" },
        { path: "/contact" },
        { path: "/services" },
        { path: "/hse" },
        { path: "/news" },
        { path: "/resources" },
        { path: "/resources/gcc-industrial-manpower-guide" },
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
