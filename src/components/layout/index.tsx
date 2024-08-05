import { Outlet } from 'react-router-dom'

import { Icons } from '~/components/custom/icons'
import { LanguageToggle } from '~/components/custom/language-toggle'
import { ModeToggle } from '~/components/custom/mode-toggle'
import { UserNav } from '~/components/layout/user-nav'
import useCollapsed from '~/hooks/use-collapsed'

import LayoutSidebar from './sidebar'
import { LayoutBody, LayoutHeader } from './wrapper'

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useCollapsed()

  return (
    <div className="relative h-svh bg-gray-50 overflow-hidden dark:bg-black">
      <div className="relative w-full h-16 overflow-hidden">
        <LayoutHeader className="fixed w-full h-16 z-10 border-b md:top-0 md:pr-8 right-0 sm:top-20 bg-background">
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
      <LayoutSidebar className="bg-background" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className="h-full overflow-x-hidden pt-16 md:overflow-y-hidden md:pt-0">
        <LayoutBody className="flex flex-col">
          <div className="flex-1 pl-0 lg:flex-row space-y-5 md:pl-80 md:w-10/12 lg:w-10/12">
            <Outlet />
          </div>
        </LayoutBody>
      </main>
    </div>
  )
}
