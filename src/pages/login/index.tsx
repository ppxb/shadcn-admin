import { useTranslation } from 'react-i18next'

import { Icons } from '~/components/custom/icons'
import { LanguageToggle } from '~/components/custom/language-toggle'
import { ModelToggle } from '~/components/custom/mode-toggle'

import { UserAuthForm } from './components/user-auth-form'

export default function Login() {
  const { t } = useTranslation()

  return (
    <div className="container relative grid h-screen flex-col items-center justify-center xl:max-w-none xl:grid-cols-2 xl:px-0">
      <div className="absolute right-4 top-4 flex gap-2 md:right-8 md:top-8">
        <LanguageToggle />
        <ModelToggle />
      </div>
      <div className="relative hidden h-full flex-col p-20 rounded-[4rem] text-white xl:flex">
        <div
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1548525343-607329242f5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
          className="rounded-[4rem] bg-cover bg-center absolute inset-10"
        />
        <div className="relative z-20 flex gap-4 items-center text-lg font-bold">
          <Icons.logo className="h-6 w-6" />
          Shadcn Admin
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-2xl">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than
              ever before.&rdquo;
            </p>
            <footer className="text-base">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="xl:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
          <div className="flex flex-col space-y-2">
            <h1 className="text-4xl font-bold">Shadcn Admin</h1>
            <p className="text-sm text-muted-foreground">
              {t('settings.login.subtitle')}
            </p>
          </div>
          <UserAuthForm />
          <p className="text-center text-sm text-muted-foreground">
            {t('settings.login.tips')}
            {' '}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              {t('settings.login.terms')}
            </a>
            {' '}
            {t('settings.login.and')}
            {' '}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              {t('settings.login.privacy')}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
