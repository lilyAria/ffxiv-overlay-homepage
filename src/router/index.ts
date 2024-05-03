import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/auto-craft'
  },
  {
    path: '/auto-craft',
    component: () => import('@src/views/AutoCraft.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router