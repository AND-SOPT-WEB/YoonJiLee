import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/user": {
        target: "http://223.130.135.50:8085", // 실제 API 서버
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, ""),
      },
    },
  },
});
