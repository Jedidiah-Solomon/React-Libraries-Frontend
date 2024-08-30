import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: import.meta.env.VITE_PORT,
    open: true,
    proxy: {
      "/api": {
        target: import.meta.env.VITE_BACKEND_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
