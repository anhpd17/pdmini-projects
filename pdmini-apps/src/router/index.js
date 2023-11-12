import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/Home.vue')
    },
    {
      path: '/music',
      name: 'Music',
      component: () => import('../views/Music/Music.vue')
    },
    {
      path: '/mindx',
      name: 'MindX',
      component: () => import('../views/MindX/MindX.vue')
    },
  ]
})

export default router
