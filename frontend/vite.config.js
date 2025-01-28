import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
export default {
  server: {
    port: 8080,  // Render expects port 8080
    host: '0.0.0.0',  // This ensures that it listens on all network interfaces
  }
}
