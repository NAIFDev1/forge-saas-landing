import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Assets resolve relative to where the site is served from:
  //   PAGES=1  -> GitHub Pages subpath (/forge-saas-landing/)
  //   default  -> a domain root (Cloudflare Workers, Vercel, local preview)
  // Vite forces NODE_ENV=production during `vite build`, so key off an
  // explicit flag rather than NODE_ENV.
  base: process.env.PAGES === '1' ? '/forge-saas-landing/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})