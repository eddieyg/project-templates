import type { Router } from 'vue-router'

export function routerUpdateTitle(router: Router, defaultTitle?: string) {
  router.beforeEach((to, _, next) => {
    const title = (to.meta.title || defaultTitle) as string
    if (document.title !== title)
      document.title = title
    next()
  })
}
