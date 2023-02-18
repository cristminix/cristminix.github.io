import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mix from 'vite-plugin-mix'
console.log('>>>', mix)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mix.default({
      handler: './api.js',
    }),
    react()],
  server:{
    port:3000
  },
  build:{
    outDir:'../'
  }
})
