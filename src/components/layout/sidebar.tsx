import { AlignJustify, ChevronsLeft, X } from 'lucide-react'
import type { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import { useEffect, useState } from 'react'

import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

import Menu from './menu'
import { sideLinks } from './sidelink'
import { Layout } from './wrapper'

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
              `fixed left-0 right-0 top-16 z-50 w-full transition-[width] scrollbar-hide md:rounded-2xl md:border md:left-4 md:top-24 md:bottom-4 ${isCollapsed ? 'md:w-16' : 'md:w-72'} bg-gray-50 dark:bg-black`,
              className
      )}
    >
      {/* Mobile Overlay */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-300 ${navOpened ? 'h-svh opacity-100' : 'h-0 opacity-0'} w-full bg-background/30 backdrop-blur md:hidden`}
      />
      <Layout>
        <div className="flex justify-end py-2 px-4 md:hidden">
          {/* Toggle Button in mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setNavOpened(prev => !prev)}
          >
            {navOpened ? <X /> : <AlignJustify />}
          </Button>
        </div>

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
