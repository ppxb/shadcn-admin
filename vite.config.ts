import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const alias = {
  '~': path.resolve(__dirname, '.', 'src')
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias
  }
})
