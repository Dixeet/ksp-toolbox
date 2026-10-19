import ui from '@nuxt/ui/vite';
import uiOptions from './uiOptions.js';

const config = {
  prose: true,
  ui: {
    ...uiOptions,
  },
  components: {
    dirs: ['src/components', 'src/features'],
    extensions: ['vue', 'jsx'],
  },
};

export default () => ui(config);
