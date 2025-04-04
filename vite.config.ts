import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  // Removed theme configuration as it should be in tailwind.config.js
  plugins: [
    tailwindcss(),
  ],

})