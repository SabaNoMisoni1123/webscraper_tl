import { createRouter, createWebHistory } from 'vue-router'
import WsAppPage from '@/components/pages/WsAppPage.vue'
import SampleView from '@/components/views/SampleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: WsAppPage
    },
    {
      path: '/sample',
      name: 'sample',
      component: SampleView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/components/views/ContactView.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/views/TestView.vue')
    }
  ]
})

export default router
