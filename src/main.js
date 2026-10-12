import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/main.css';
import router from './plugins/router.js';
import { createHead } from '@unhead/vue/client';
import { CanonicalPlugin } from '@unhead/vue/plugins';

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    /* eslint-disable-next-line no-console */
    console.clear();
  });
}


const app = createApp(App);

app.use(router);
const head = createHead({
  plugins: [
    CanonicalPlugin({
      canonicalHost: 'https://dixeet.github.io/ksp-toolbox/',
    }),
  ],
});
app.use(head);

app.mount('#app');
