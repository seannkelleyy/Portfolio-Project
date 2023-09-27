import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

module.exports = {
  root: 'src',
  build: {
    outDir: '../dist',
    assetsDir: '/src/assets'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
