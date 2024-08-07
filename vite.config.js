import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInclude: ['**/*.pdf', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg']
  },
  server: {
    port: 5173
  }
})
