import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src", // If we add index.js file outside src, it automatically picks root, wouldn't need this line in that case.
});
