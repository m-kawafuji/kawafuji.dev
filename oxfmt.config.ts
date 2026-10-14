import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: true,
  sortTailwindcss: {
    stylesheet: "./src/styles/global.css",
  },
  astro: true,
});
