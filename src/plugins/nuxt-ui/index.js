import ui from '@nuxt/ui/vite';
import themeUi from './ui.js';

const config = {
  prose: true,
  ui: {
    ...themeUi,
  },
};

export default () => ui(config);
