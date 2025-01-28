import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const port = process.env.PORT || 5175;
// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['hitpredict.onrender.com']
  },
  plugins: [react()],
})
