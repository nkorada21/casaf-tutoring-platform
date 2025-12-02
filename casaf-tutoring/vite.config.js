import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  // Required for React Router on Vercel
  build: {
    outDir: "dist",
  },

  // Required for SPA fallback (React Router)
  server: {
    historyApiFallback: true,
  },

  // Required for Vercel to handle client-side routing
  preview: {
    port: 4173,
    strictPort: true,
  },
});