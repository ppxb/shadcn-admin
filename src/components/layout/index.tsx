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
      <div className="relative w-full h-16 overflow-hidden">
        <LayoutHeader className="fixed w-full h-16 z-50 border-b md:w-auto md:rounded-2xl md:border md:inset-4 md:p-8 bg-gray-50 dark:bg-black">
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
      </div>
      <LayoutSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`h-svh flex flex-col transition-[width] p-[64px_24px_24px_24px] bg-background ${isCollapsed ? 'md:p-[32px_24px_24px_104px]' : 'md:p-[32px_24px_24px_328px]'}`}>
        <Outlet />
      </main>
    </div>
  )
}
