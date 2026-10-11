<template>
  <div v-if="!hasDefaultSlot">
    <slot></slot>
  </div>
  <div
    :class="[{ typeset: !disableTypesetting, 'typeset-basic': !disableTypesetting }, $attrs.class]"
    v-if="html"
    v-html="html"
  />
</template>

<script setup>
import { computed, shallowRef, useSlots, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import { katex } from '@mdit/plugin-katex';

const props = defineProps({
  md: {
    type: String,
    default: '',
  },
  options: {
    type: [String, Object],
    default: () => ({
      html: true,
      xhtmlOut: true,
      breaks: true,
      typographer: true,
    }),
  },
  inline: {
    type: Boolean,
    default: false,
  },
  math: {
    type: [Boolean, Object],
    default: false,
  },
  disableTypesetting: {
    type: Boolean,
    default: false,
  },
});

const slots = useSlots();
const hasDefaultSlot = computed(() => {
  return !!slots.default && slots.default().length > 0;
});
const html = shallowRef('');

onMounted(async () => {
  let markdown = '';
  if (hasDefaultSlot.value) {
    markdown = slots.default()[0].children.replace(/  +/g, '');
  } else if (props.md) {
    markdown = props.md;
  }
  if (markdown) {
    const parser = new MarkdownIt(props.options);
    if (props.math) {
      const katexOptions = typeof props.math === 'object' ? props.math : { output: 'mathml' };
      parser.use(katex, katexOptions);
    }
    html.value = props.inline ? parser.renderInline(markdown) : parser.render(markdown);
  }
});
</script>

<style>
@import 'katex/dist/katex.min.css';
.katex-html {
  display: none;
}
.katex math {
  width: fit-content;
}
</style>
