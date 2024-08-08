import type { Router } from '@remix-run/router'
import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '~/components/layout'
import ExceptionPage from '~/pages/404'

const exceptionRoutes: RouteObject[] = [
  {
    path: '*',
    lazy: async () => ({
      Component: (await import('~/pages/404')).default
    })
  }
]

const meetingsRoutes: RouteObject = {
  path: '/meetings',
  element: <Layout />,
  errorElement: <ExceptionPage />,
  children: [
    {
      index: true,
      path: 'list',
      lazy: async () => ({
        Component: (await import('~/pages/meetings/list')).default
      })
    }
  ]
}

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
    errorElement: <ExceptionPage />,
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
  },
  meetingsRoutes
]

const router: Router = createBrowserRouter(staticRoutes)

export default router
