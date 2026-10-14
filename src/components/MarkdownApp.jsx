import { defineMarkdownComponent } from '@comark/vue';
import math, { Math } from '@comark/vue/plugins/math';
import breaks from '@comark/vue/plugins/breaks';
import 'katex/dist/katex.min.css';

export default defineMarkdownComponent({
  name: 'MarkdownApp',

  plugins: [
    math(),
    breaks()
  ],

  components: {
    Math,
  },
});
