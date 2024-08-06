import { ChevronRight } from 'lucide-react'
import type * as React from 'react'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'

import { Button, buttonVariants } from '~/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '~/components/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/components/ui/tooltip'
import useCheckActiveMenu from '~/hooks/use-check-active-menu'
import { cn } from '~/lib/utils'

import type { SideLink } from './sidelink'

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean
  links: SideLink[]
  closeMenu: () => void
}

export default function Menu({ links, isCollapsed, className, closeMenu }: MenuProps) {
  const renderLink = ({ sub, ...rest }: SideLink) => {
    const key = `${rest.title}-${rest.href}`
    if (isCollapsed && sub) {
      return (
        <MenuLinkIconDropdown
          {...rest}
          sub={sub}
          key={key}
          closeMenu={closeMenu}
        />
      )
    }

    if (isCollapsed) {
      return <MenuLinkIcon {...rest} key={key} closeMenu={closeMenu} />
    }

    if (sub) {
      return <MenuLinkDropdown {...rest} sub={sub} key={key} closeMenu={closeMenu} />
    }

    return <MenuLinkItem {...rest} key={key} closeIcon={false} closeMenu={closeMenu} />
  }

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        'group border-b py-2 transition-[max-height,padding] duration-300 data-[collapsed=true]:py-2 md:border-none',
        className
      )}
    >
      <TooltipProvider delayDuration={0}>
        <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {links.map(renderLink)}
        </nav>
      </TooltipProvider>
    </div>
  )
}

interface MenuLinkProps extends SideLink {
  subLink?: boolean
  closeMenu: () => void
  closeIcon?: boolean
}

function MenuLinkItem({
  title,
  icon,
  closeIcon = false,
  label,
  href,
  closeMenu,
  subLink = false
}: MenuLinkProps) {
  const { checkIsActive } = useCheckActiveMenu()
  const { t } = useTranslation()

  return (
    <Link
      to={href}
      onClick={closeMenu}
      className={cn(
        buttonVariants({
          variant: checkIsActive(href) ? 'secondary' : 'ghost',
          size: 'default',
        }),
        'h-12 justify-start text-wrap secondary shadow-none px-6 mx-2',
        subLink && 'h-12 w-full mx-0 pl-8'
      )}
      aria-current={checkIsActive(href) ? 'page' : undefined}
    >
      {!closeIcon && <div className="mr-2">{icon}</div>}
      {t(title)}
      {label && (
        <div className="ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground">
          {label}
        </div>
      )}
    </Link>
  )
}

function MenuLinkDropdown({ title, href, icon, label, sub, closeMenu }: MenuLinkProps) {
  const { checkIsActive } = useCheckActiveMenu()
  const { t } = useTranslation()

  const isChildActive = !!sub?.find(s => checkIsActive(href + s.href))

  return (
    <Collapsible defaultOpen={isChildActive} className="mx-2">
      <CollapsibleTrigger className={cn(
        buttonVariants({ variant: 'ghost', size: 'default' }),
        'group h-12 w-full text-wrap justify-start secondary shadow-none pl-6'
      )}
      >
        <div className="mr-2">{icon}</div>
        {t(title)}
        {
          label && (
            <div className="ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground">
              {label}
            </div>
          )
        }
        <span
          className={cn(
            'ml-auto transition-all group-data-[state="open"]:rotate-90'
          )}
        >
          <ChevronRight size={18} />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="collapsibleDropdown" asChild>
        <ul>
          {sub!.map((subLink) => {
            const childLink = href + subLink.href
            return (
              <li key={subLink.title} className="my-1">
                <MenuLinkItem {...subLink} href={childLink} subLink closeIcon={false} closeMenu={closeMenu} />
              </li>
            )
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

function MenuLinkIcon({ title, icon, label, href }: MenuLinkProps) {
  const { checkIsActive } = useCheckActiveMenu()
  const { t } = useTranslation()

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={href}
          className={cn(
            buttonVariants({
              variant: checkIsActive(href) ? 'secondary' : 'ghost',
              size: 'icon'
            }),
            'h-10 w-10'
          )}
        >
          {icon}
          <span className="sr-only">{t(title)}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {t(title)}
        {label && (
          <span className="ml-auto text-muted-foreground">{label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  )
}

function MenuLinkIconDropdown({ title, href, icon, label, sub }: MenuLinkProps) {
  const { checkIsActive } = useCheckActiveMenu()

  const isChildActive = !!sub?.find(s => checkIsActive(href + s.href))
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button
              variant={isChildActive ? 'secondary' : 'ghost'}
              size="icon"
              className="h-10 w-10"
            >
              {icon}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={12} className="flex items-center gap-4">
          {t(title)}
          {' '}
          {
            label && <span className="ml-auto text-muted-foreground">{label}</span>
          }
          <ChevronRight size={16} />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent side="right" align="start" sideOffset={12}>
        <DropdownMenuLabel>
          {t(title)}
          {' '}
          {label ? `(${label})` : ''}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {
          sub?.map((subLink) => {
            const childLink = href + subLink.href
            return (
              <DropdownMenuItem key={`${subLink.title}-${subLink.href}`} asChild>
                <Link to={childLink} className={`${checkIsActive(childLink) ? 'bg-secondary' : 'cursor-pointer h-10'}`}>
                  {subLink.icon}
                  <span className="ml-2 max-w-52 text-wrap">{t(subLink.title)}</span>
                  {subLink.label && <span className="ml-auto text-xs">{subLink.label}</span>}
                </Link>
              </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
