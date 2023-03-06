import type { RouteRecordRaw } from 'vue-router'
import RootLayout from '@/components/layout/RootLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'RootLayout',
    component: RootLayout,
    children: [
      {
        path: '/',
        component: () => import('@/pages/Main/_Index.vue'),
        name: 'Main',
        meta: {
          title: 'main page title',
        },
      },
      {
        path: '/example',
        name: 'Example',
        component: () => import('@/pages/Example/_Index.vue'),
        meta: {
          title: 'example page title',
        },
      },
    ],
  },
]

export default routes
