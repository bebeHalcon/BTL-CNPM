import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
      "assets": path.resolve(__dirname, './src/assets'),
      "components": path.resolve(__dirname, './src/components'),
      "constant": path.resolve(__dirname, './src/constant'),
      "hook": path.resolve(__dirname, './src/hook'),
      "pages": path.resolve(__dirname, './src/pages'),
      "routes": path.resolve(__dirname, './src/routes'),
      "schema": path.resolve(__dirname, './src/schema'),
      "services": path.resolve(__dirname, './src/services'),
      "stores": path.resolve(__dirname, './src/stores'),
      "utils": path.resolve(__dirname, './src/utils')
    }
  }
})
