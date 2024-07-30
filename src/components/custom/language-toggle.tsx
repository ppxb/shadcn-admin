import { Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '~/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu'
import { useLocalStorage } from '~/hooks/use-local-storage'

export function LanguageToggle() {
  const [lang, setLang] = useLocalStorage({
    key: 'shadcn-admin-language',
    defaultValue: 'zh-CN'
  })
  const { i18n } = useTranslation()

  const onLanguageChange = (lang: string) => {
    setLang(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={lang} onValueChange={onLanguageChange}>
          <DropdownMenuRadioItem value="zh-CN">中文</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en-US">English</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
