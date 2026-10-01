import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages serves this app from https://<user>.github.io/forge-saas-landing/,
  // so asset URLs need the repo prefix. A bare "/assets/..." would resolve
  // against the domain root and 404, leaving the page blank.
  base: process.env.NODE_ENV === 'production' ? '/forge-saas-landing/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})