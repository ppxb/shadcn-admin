import {
  BookA,
  Fingerprint,
  Layers3,
  LayoutDashboard,
  ListTree,
  Presentation,
  ScrollText,
  Settings,
  SquareMenu,
  Users
} from 'lucide-react'

export interface MenuLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends MenuLink {
  sub?: MenuLink[]
}

export const sideLinks: SideLink[] = [
  {
    title: 'menus.dashboard',
    label: '',
    href: '/',
    icon: <LayoutDashboard size={18} />,
  },
  {
    title: 'menus.mettings',
    label: '',
    href: '/mettings',
    icon: <Presentation size={18} />,
    sub: [
      {
        title: 'menus.mettings.list',
        label: '',
        href: '/index',
        icon: <Layers3 size={18} />,
      },
    ]
  },
  {
    title: 'menus.settings',
    label: '',
    href: '/settings',
    icon: <Settings size={18} />,
    sub: [
      {
        title: 'menus.settings.users',
        label: '',
        href: '/users',
        icon: <Users size={18} />,
      },
      {
        title: 'menus.settings.roles',
        label: '',
        href: '/roles',
        icon: <Fingerprint size={18} />,
      },
      {
        title: 'menus.settings.depts',
        label: '',
        href: '/depts',
        icon: <ListTree size={18} />,
      },
      {
        title: 'menus.settings.menus',
        label: '',
        href: '/menus',
        icon: <SquareMenu size={18} />,
      },
      {
        title: 'menus.settings.dicts',
        label: '',
        href: '/dicts',
        icon: <BookA size={18} />,
      },
      {
        title: 'menus.settings.logs',
        label: '',
        href: '/logs',
        icon: <ScrollText size={18} />,
      },
    ]
  },
  {
    title: 'menus.settings',
    label: '',
    href: '/settings',
    icon: <Settings size={18} />,
    sub: [
      {
        title: 'menus.settings.users',
        label: '',
        href: '/users',
        icon: <Users size={18} />,
      },
      {
        title: 'menus.settings.roles',
        label: '',
        href: '/roles',
        icon: <Fingerprint size={18} />,
      },
      {
        title: 'menus.settings.depts',
        label: '',
        href: '/depts',
        icon: <ListTree size={18} />,
      },
      {
        title: 'menus.settings.menus',
        label: '',
        href: '/menus',
        icon: <SquareMenu size={18} />,
      },
      {
        title: 'menus.settings.dicts',
        label: '',
        href: '/dicts',
        icon: <BookA size={18} />,
      },
      {
        title: 'menus.settings.logs',
        label: '',
        href: '/logs',
        icon: <ScrollText size={18} />,
      },
    ]
  },
  {
    title: 'menus.settings',
    label: '',
    href: '/settings',
    icon: <Settings size={18} />,
    sub: [
      {
        title: 'menus.settings.users',
        label: '',
        href: '/users',
        icon: <Users size={18} />,
      },
      {
        title: 'menus.settings.roles',
        label: '',
        href: '/roles',
        icon: <Fingerprint size={18} />,
      },
      {
        title: 'menus.settings.depts',
        label: '',
        href: '/depts',
        icon: <ListTree size={18} />,
      },
      {
        title: 'menus.settings.menus',
        label: '',
        href: '/menus',
        icon: <SquareMenu size={18} />,
      },
      {
        title: 'menus.settings.dicts',
        label: '',
        href: '/dicts',
        icon: <BookA size={18} />,
      },
      {
        title: 'menus.settings.logs',
        label: '',
        href: '/logs',
        icon: <ScrollText size={18} />,
      },
    ]
  },
]
