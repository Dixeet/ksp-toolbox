import './assets/css/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './plugins/router.js';
import ui from '@nuxt/ui/vue-plugin';
import prosePlugin from '@/plugins/nuxt-ui/prosePlugin.js'

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    /* eslint-disable-next-line no-console */
    console.clear();
  });
}

const app = createApp(App);

app.use(router);
app.use(ui);
app.use(prosePlugin, {suffix: ''});

app.mount('#app');
