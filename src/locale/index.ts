import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import LocalStorageBackend from 'i18next-localstorage-backend'
import { initReactI18next } from 'react-i18next'

import enUS from './en-US'
import zhCN from './zh-CN'

const resources = {
  'zh-CN': {
    translation: zhCN
  },
  'en-US': {
    translation: enUS
  }
}

const defaultLng = localStorage.getItem('shadcn-admin-language') || 'zh-CN'

i18next
  .use(LocalStorageBackend)
  .use(new LanguageDetector(null, { lookupLocalStorage: 'shadcn-admin-language' }))
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLng,
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false
    }
  })

export default i18next
