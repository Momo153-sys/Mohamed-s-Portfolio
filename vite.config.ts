import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'



import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contentCollections from '@content-collections/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    contentCollections(),
    tailwindcss(),
    viteReact(),
  ],
})

export default config
