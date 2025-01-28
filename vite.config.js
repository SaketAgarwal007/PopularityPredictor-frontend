import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const port = process.env.PORT || 5173;
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
