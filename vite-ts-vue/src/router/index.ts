import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { routerUpdateTitle } from './middleware'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const middleware = [
  routerUpdateTitle,
]
middleware.forEach(m => m(router))

export default router
