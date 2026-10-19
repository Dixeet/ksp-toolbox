<template>
  <UButton
    :icon="copied ? 'i-tabler-clipboard-check' : 'i-tabler-clipboard-copy'"
    :color="copied ? 'success' : 'neutral'"
    variant="ghost"
    size="xs"
    class="shrink-0 p-1 rounded hover:bg-muted/50 cursor-pointer"
    title="Copy value"
    @click.stop="copyToClipboard"
  />
</template>

<script setup>
import { shallowRef } from 'vue';
import UButton from '@nuxt/ui/components/Button.vue';

const props = defineProps({
  value: {
    type: [Number, String],
    required: true,
  },
});

const copied = shallowRef(false);
let timeoutId = null;

async function copyToClipboard() {
  await navigator.clipboard.writeText(String(props.value));
  copied.value = true;
  if (timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    copied.value = false;
  }, 1000);
}
</script>
