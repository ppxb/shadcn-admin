import { Outlet } from 'react-router-dom'

import { Icons } from '~/components/custom/icons'
import { LanguageToggle } from '~/components/custom/language-toggle'
import { ModeToggle } from '~/components/custom/mode-toggle'
import { UserNav } from '~/components/layout/user-nav'
import useCollapsed from '~/hooks/use-collapsed'

import LayoutSidebar from './sidebar'
import { LayoutHeader } from './wrapper'

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useCollapsed()

  return (
    <div className="relative h-svh overflow-hidden">
      <LayoutHeader className="overflow-hidden fixed w-full h-16 z-50 border-b md:w-auto md:rounded-2xl md:border md:inset-4 md:p-8 bg-gray-50 dark:bg-black">
        <div className="flex items-center gap-2">
          <Icons.logo className="h-6 w-6" />
          <div
            className="font-bold text-xl truncate"
          >
            Shadcn Admin
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <LanguageToggle />
          <ModeToggle />
          <UserNav />
        </div>
      </LayoutHeader>
      <LayoutSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`h-full transition-[padding] p-[136px_24px_24px_24px] bg-background ${isCollapsed ? 'md:p-[96px_24px_24px_128px]' : 'md:p-[96px_24px_24px_352px]'}`}>
        <Outlet />
      </main>
    </div>
  )
}
