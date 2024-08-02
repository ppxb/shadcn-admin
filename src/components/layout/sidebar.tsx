import { AlignJustify, ChevronsLeft, X } from 'lucide-react'
import type { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

import { Icons } from '../custom/icons'

import Menu from './menu'
import { sideLinks } from './sidelink'
import { Layout, LayoutHeader } from './wrapper'

interface LayoutSidebarProps extends HTMLAttributes<HTMLElement> {
  isCollapsed: boolean
  setIsCollapsed: Dispatch<SetStateAction<boolean>>
}

export default function LayoutSidebar({ className, isCollapsed, setIsCollapsed }: LayoutSidebarProps) {
  const [navOpened, setNavOpened] = useState(false)

  useEffect(() => {
    if (navOpened) {
      document.body.classList.add('overflow-hidden')
    }
    else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [navOpened])

  return (
    <aside
      className={cn(
              `fixed left-0 right-0 top-0 z-50 w-full border-r transition-[width] scrollbar-hide md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? 'md:w-16' : 'md:w-72'}`,
              className
      )}
    >
      {/* Mobile Overlay */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-300 ${navOpened ? 'h-svh opacity-100' : 'h-0 opacity-0'} w-full bg-white/30 backdrop-blur md:hidden`}
      />
      <Layout>
        <LayoutHeader className="sticky justify-between top-0 p-4 md:px-5">
          <div className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <div
              className={`font-bold text-xl truncate ${isCollapsed ? 'invisible w-0' : 'visible w-auto'}`}
            >
              Shadcn Admin
            </div>
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setNavOpened(prev => !prev)}
          >
            {navOpened ? <X /> : <AlignJustify />}
          </Button>
        </LayoutHeader>

        <Menu
          className={`h-full flex-1 overflow-auto scrollbar-hide ${navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-2'}`}
          closeMenu={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sideLinks}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed(prev => !prev)}
          size="icon"
          variant="outline"
          className="absolute -right-3 top-12 hidden rounded-full md:inline-flex h-6 w-6"
        >
          <ChevronsLeft
            className={`h-4 w-4 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </Button>
      </Layout>
    </aside>
  )
}
