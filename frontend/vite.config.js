import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `https://ecommerce-app-86uo.onrender.com`, 
        changeOrigin: true,
        secure: false,
      }
    }
  },  
  
})