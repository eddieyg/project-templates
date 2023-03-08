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
        component: () => import('@/pages/main/Index.vue'),
        name: 'main',
        meta: {
          title: 'main page title',
        },
      },
      {
        path: '/example',
        name: 'example',
        component: () => import('@/pages/example/Index.vue'),
        meta: {
          title: 'example page title',
        },
      },
    ],
  },
]

export default routes
