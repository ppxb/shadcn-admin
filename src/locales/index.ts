import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import enUS from './en-US'
import zhCN from './zh-CN'

const LANGUAGE_KEY = 'shadcn-admin-language'

const resources = {
  'zh-CN': { translation: zhCN },
  'en-US': { translation: enUS }
}

i18next
  .use(new LanguageDetector({
    name: LANGUAGE_KEY,
    lookup: () => {
      return localStorage.getItem(LANGUAGE_KEY)
    },
    cacheUserLanguage(lng: string) {
      localStorage.setItem(LANGUAGE_KEY, lng)
    },
  }))
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-CN',
    detection: {
      order: ['localStorage', 'navigator']
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

export default i18next
