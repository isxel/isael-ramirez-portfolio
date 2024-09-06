import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/isael-ramirez-portfolio/" : "/", // adjust this to match your repo name
}));
