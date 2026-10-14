<template>
  <vnode />
</template>

<script setup>
import { h, useSlots } from 'vue';
import proseUi from '@/plugins/nuxt-ui/prose.js';

const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});
const slots = useSlots();
const defaultSlot = slots?.default ? slots.default() : null;

const vnode = h(props.tag, { class: getProseClasses(props.tag) }, defaultSlot);

function getProseClasses(htmlElement) {
  return proseUi[htmlElement]?.slots ? proseUi[htmlElement]?.slots?.base : proseUi[htmlElement]?.base;
}
</script>