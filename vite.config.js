import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // ✅ Opens browser automatically on start
    historyApiFallback: true, // ✅ Fixes 404 on refresh for React Router
  },
  build: {
    chunkSizeWarningLimit: 1000, // ✅ Increases chunk size limit to avoid warnings
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "@mui/material"], // ✅ Splits vendor libs for better performance
        },
      },
    },
  },
  preview: {
    port: 3001, // ✅ Runs preview server on port 3001
  },
});
