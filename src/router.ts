import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/works', component: () => import('./pages/Works.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router