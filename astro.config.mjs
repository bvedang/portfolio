import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.PUBLIC_SITE_URL || "https://vedangbarhate.com";

export default defineConfig({
  site: siteUrl,
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      langs: [
        "c",
        "bash",
        "python",
        "go",
        "typescript",
        "javascript",
        "rust",
        "java",
      ],
    },
  },
});
