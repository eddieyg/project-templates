import type { Router } from 'vue-router'

export function routerUpdateTitle(router: Router) {
  router.beforeEach((to, _, next) => {
    const title = (to.meta.title || import.meta.env.VITE_APP_TITLE) as string
    if (document.title !== title)
      document.title = title
    next()
  })
}

const middleware = [
  routerUpdateTitle,
]

export default middleware
