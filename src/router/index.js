import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'refAndReactive',
      component: () => import('../views/RefAndReactiveView.vue')
    },
    {
      path: '/toRef',
      name: 'toRefToRefsToRaw',
      component: () => import('../views/ToRefToRefsToRawView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchView.vue')
    },
    {
      path: '/watchEffect',
      name: 'watchEffect',
      component: () => import('../views/WatchEffectView.vue')
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('../views/ComponentView.vue')
    },
    {
      path: '/directive',
      name: 'directive',
      component: () => import('../views/DirectiveView.vue')
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: () => import('../views/HooksView.vue')
    },
    {
      path: '/use',
      name: 'use',
      component: () => import('../views/UseView.vue')
    },
    {
      path: '/socks',
      name: 'socks',
      component: () => import('../views/SocksView.vue')
    }
  ]
})

export default router
