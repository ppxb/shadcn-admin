import type { Router } from '@remix-run/router'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

const staticRoutes: RouteObject[] = [
  {
    path: '/login',
    lazy: async () => ({
      Component: (await import('~/pages/login')).default
    })
  }
]

const router: Router = createBrowserRouter(staticRoutes)

export default router
