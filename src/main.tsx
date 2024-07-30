import { LoaderCircle } from 'lucide-react'
import 'non.geist'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '~/components/custom/theme-provider'
import i18next from '~/locale'
import router from '~/router'
import '~/styles/index.css'

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-background z-50">
      <div className="flex items-center gap-2 animate-pulse">
        <LoaderCircle className="h-5 w-5 animate-spin" />
        <p className="text-base">Loading...</p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} defaultNS="translation">
      <ThemeProvider defaultTheme="system" storageKey="shadcn-admin-theme">
        <RouterProvider router={router} fallbackElement={<Loading />} />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
