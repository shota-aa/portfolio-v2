import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/portfolio-v2/', component: () => import('./pages/Home.vue') },
  { path: '/portfolio-v2/works', component: () => import('./pages/Works.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router