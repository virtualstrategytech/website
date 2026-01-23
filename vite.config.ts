import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  server: {
    host: "127.0.0.1", // ✅ localhost only (safer + avoids exposing dev server on LAN)
    port: 5173,
    strictPort: true, // ✅ fail fast if port is taken instead of auto-switching
  },
});
