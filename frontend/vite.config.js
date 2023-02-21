import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mix from 'vite-plugin-mix'

const {NODE_ENV} = process.env;

const plugins = [
  react()
]

if(NODE_ENV=="development"){
  plugins.push(mix.default({
      handler: './api/index.cjs',
  }))
}
export default defineConfig({
  plugins,
  server:{
    port:3000
  },
  build:{
    outDir:'../'
  }
})
