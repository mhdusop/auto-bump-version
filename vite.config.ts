import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { readFileSync } from 'fs'

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'))

export default defineConfig({
  plugins: [svelte()],
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(pkg.version)
  }
})