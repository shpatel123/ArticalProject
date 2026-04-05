import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Vite 8 uses rolldown (not esbuild) — do not set minify:'esbuild'
    chunkSizeWarningLimit: 600,
  },
})
