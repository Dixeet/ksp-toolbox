import './assets/css/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router.js';

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    /* eslint-disable-next-line no-console */
    console.clear();
  });
}


const app = createApp(App);

app.use(router);

app.mount('#app');
