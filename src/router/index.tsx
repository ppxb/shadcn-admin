import type { Router } from '@remix-run/router'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'

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
      }
    ]
  }
]

const router: Router = createBrowserRouter(staticRoutes)

export default router
