import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': 'http://backend:3001',  // Redirigir las solicitudes de socket.io al backend
      '/api': 'http://backend:3001', // Redirige las solicitudes al backend MODIFICACIÓN
    }
  }
})
