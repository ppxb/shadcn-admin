import 'non.geist'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from '~/components/custom/theme-provider'
import '~/styles/index.css'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="shadcn-admin-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
