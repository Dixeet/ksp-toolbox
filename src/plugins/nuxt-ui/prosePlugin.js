import { h } from 'vue';
import proseUi from '@/plugins/nuxt-ui/proseUiOptions.js';

function getProseClasses(htmlElement) {
  return proseUi[htmlElement]?.slots
    ? proseUi[htmlElement]?.slots?.base
    : proseUi[htmlElement]?.base;
}

const prosePlugin = {
  install(app, options) {
    options = { suffix: 'Tag', prefix: '', ...options};
    Object.keys(proseUi).forEach((tag) => {
      const name = options.prefix + tag[0].toUpperCase() + tag.substring(1) + options.suffix;
      app.component(name, {
        setup(props, { slots }) {
          const defaultSlot = slots?.default ? slots.default() : null;

          const vnode = h(tag, { class: getProseClasses(tag) }, defaultSlot);

          return () => vnode;
        },
      });
    });

  }
}

export default prosePlugin;