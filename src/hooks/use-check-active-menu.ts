import { useLocation } from 'react-router-dom'

export default function useCheckActiveMenu() {
  const { pathname } = useLocation()

  const checkActiveMenu = (menu: string) => {
    const paths = pathname.split('/').filter(n => n !== '')

    if (menu === '/' && paths.length < 1) {
      return true
    }

    return paths.includes(menu.replace(/^\//, ''))
  }

  const checkIsActive = (menu: string) => {
    const paths = pathname.split('/').filter(n => n !== '')

    if (menu === '/' && paths.length < 1) {
      return true
    }
    const menuLink = menu.replace(/^\/|\/$/g, '')
    const pathLink = pathname.replace(/^\/|\/$/g, '')
    return menuLink === pathLink
  }

  return { checkActiveMenu, checkIsActive }
}
