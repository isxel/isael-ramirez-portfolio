import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/isael-ramirez-portfolio/",
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});
