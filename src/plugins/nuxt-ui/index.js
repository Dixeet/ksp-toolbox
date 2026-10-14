import ui from '@nuxt/ui/vite';
import uiOptions from './ui.js';

const config = {
  prose: true,
  ui: {
    ...uiOptions,
  },
  components: {
    extensions: ['vue', 'jsx'],
  },
};

export default () => ui(config);
