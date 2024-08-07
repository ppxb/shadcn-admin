import type { Router } from '@remix-run/router'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'

const exceptionRoutes: RouteObject[] = [
  {
    path: '*',
    lazy: async () => ({
      Component: (await import('~/pages/404')).default
    })
  }
]

const staticRoutes: RouteObject[] = [
  {
    path: '/login',
    lazy: async () => ({
      Component: (await import('~/pages/login')).default
    })
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '',
        lazy: async () => ({
          Component: (await import('~/pages/dashboard')).default
        })
      },
      ...exceptionRoutes
    ]
  }
]

const router: Router = createBrowserRouter(staticRoutes)

export default router
