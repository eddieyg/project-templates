import type { RouteRecordRaw } from 'vue-router'
import type { IRoute } from '@/types'
import RootLayoutComp from '@/components/layout/RootLayout.vue'

export const Main: IRoute.RecordRaw = {
  path: '/',
  component: () => import('@/pages/Index.vue'),
  name: 'Index',
  meta: {
    title: 'main page title',
  },
}

export const Example: IRoute.RecordRaw = {
  path: '/example',
  name: 'Example',
  component: () => import('@/pages/Example.vue'),
  meta: {
    title: 'example page title',
  },
}

export const RootLayout: RouteRecordRaw = {
  path: '/',
  name: 'RootLayout',
  component: RootLayoutComp,
  children: [
    Main,
    Example,
  ],
}

const routes: RouteRecordRaw[] = [
  RootLayout,
]

export default routes
