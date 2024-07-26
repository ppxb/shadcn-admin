import path from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const alias={
  "~":path.resolve(__dirname,".","src")
}

export default defineConfig({
  plugins: [react()],
  resolve:{
    alias
  }
})
