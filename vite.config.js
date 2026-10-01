import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset URLs so the same build works at a domain root, at a
  // GitHub Pages subpath (/forge-saas-landing/), and in local previews.
  // Absolute "/assets/..." would 404 on a Pages subpath.
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})