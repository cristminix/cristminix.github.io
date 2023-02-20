import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mix from 'vite-plugin-mix'

export default defineConfig({
  plugins: [
    mix.default({
      handler: './api/index.cjs',
    }),
    react()],
  server:{
    port:3000
  },
  build:{
    outDir:'../'
  }
})
