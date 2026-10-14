import { createRouter, createWebHistory } from 'vue-router';
import setHead from '@/plugins/unhead.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: { title: 'Tools' },
    },
    {
      path: '/bodies',
      name: 'bodies',
      component: () => import('@/pages/BodiesPage.vue'),
      meta: { title: 'Bodies' },
    },
  ],
});

router.beforeEach((to) => {
  setHead(to.meta.title, to.href, to.meta.description);
});

export default router;
