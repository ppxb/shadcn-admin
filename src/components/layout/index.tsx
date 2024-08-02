import { Outlet } from 'react-router-dom'

import { LanguageToggle } from '~/components/custom/language-toggle'
import { ModeToggle } from '~/components/custom/mode-toggle'
import useCollapsed from '~/hooks/use-collapsed'

import LayoutSidebar from './sidebar'
import { LayoutBody, LayoutHeader } from './wrapper'

export default function Layout() {
  const [isCollapsed, setIsCollapsed] = useCollapsed()

  return (
    <div className="relative h-svh bg-gray-50 overflow-hidden dark:bg-black">
      <LayoutSidebar className="bg-background" isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className="h-full overflow-x-hidden pt-16 md:overflow-y-hidden md:pt-0">
        <div className="relative w-full h-16 overflow-hidden">
          <LayoutHeader className="fixed w-full h-16 z-10 border-b md:top-0 lg:top-0 right-0 sm:top-20 bg-background">
            <div className="ml-auto flex items-center space-x-4">
              <LanguageToggle />
              <ModeToggle />
              {/* <UserNav /> */}
            </div>
          </LayoutHeader>
        </div>
        <LayoutBody className="flex flex-col">
          <div className="flex-1 pl-0 lg:flex-row space-y-5 md:pl-80 md:w-10/12 lg:w-10/12">
            <Outlet />
          </div>
        </LayoutBody>
      </main>
    </div>
  )
}
