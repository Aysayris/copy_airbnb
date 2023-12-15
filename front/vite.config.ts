import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // Development server settings
    host: 'localhost',
    port: 3000,
  },
  plugins: [react()],
})
