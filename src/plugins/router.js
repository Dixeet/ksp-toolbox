import { createRouter, createWebHistory } from 'vue-router';

const appTitle = 'KSP Toolbox';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: { title: 'Tools', documentTitle: `Tools - ${appTitle}` },
    },
  ],
});

router.afterEach((to, from, failure) => {
  if (!failure && typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
});

export default router;
