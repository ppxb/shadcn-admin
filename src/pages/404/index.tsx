import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <p className="text-lg">{t('settings.exception.404')}</p>
      <a href="/" className="text-blue-500 hover:underline mt-4">{t('settings.exception.back')}</a>
    </div>
  )
}
