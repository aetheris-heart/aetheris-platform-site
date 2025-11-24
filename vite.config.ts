import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ⚡ Configuration Vite pour AETHERIS IA SANTÉ
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ➜ permet d’utiliser "@/components/..." dans les imports
    },
  },

  server: {
    port: 3000,          // 🌐 Port local du frontend
    open: true,          // Ouvre automatiquement ton navigateur
    strictPort: true,
  },

  build: {
    outDir: "dist",      // 📦 Dossier de build pour déploiement
    sourcemap: false,    // 🔒 Pas de sourcemap en production
    chunkSizeWarningLimit: 1000,
  },

  // 🧩 Optimisations Tailwind / React
  css: {
    devSourcemap: true,
  },

  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});
