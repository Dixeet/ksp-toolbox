<template>
  <UModal
    v-model:open="isExportModalOpen"
    title="Export"
    description="Inspect, copy, or download the complete dataset."
    :ui="{ content: 'w-full max-w-6xl' }"
  >
    <UButton label="Export" icon="i-tabler-file-export" color="neutral" variant="outline" />
    <template #body>
      <pre
        class="max-h-[60vh] overflow-auto rounded-md bg-elevated p-4 text-left text-xs leading-relaxed whitespace-pre font-mono"
        aria-label="JSON preview"
        >{{ json }}</pre>
    </template>
    <template #footer="{ close }">
      <UButton
        label="Copy JSON"
        icon="i-tabler-copy"
        color="neutral"
        variant="outline"
        @click="copyJson"
      />
      <UButton label="Download JSON" icon="i-tabler-download" @click="downloadJson" />
      <UButton label="Close" color="neutral" variant="ghost" @click="close" />
    </template>
  </UModal>
</template>

<script setup>
import { useToast } from '@nuxt/ui/composables';
import { computed, shallowRef } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const isExportModalOpen = shallowRef(false);
const json = computed(() => JSON.stringify(props.data, null, 2));
const toast = useToast();

async function copyJson() {
  try {
    await navigator.clipboard.writeText(json.value);
    toast.add({
      title: 'JSON copied',
      description: 'The complete dataset is now in your clipboard.',
      color: 'success',
      icon: 'i-tabler-check',
    });
  } catch {
    toast.add({
      title: 'Copy failed',
      description: 'The JSON could not be copied to the clipboard.',
      color: 'error',
      icon: 'i-tabler-alert-circle',
    });
  }
}

function downloadJson() {
  const blob = new Blob([json.value], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = 'data.json';
  document.body.appendChild(link);
  try {
    link.click();
  } finally {
    link.remove();
    URL.revokeObjectURL(url);
  }

  toast.add({
    title: 'Downloaded',
    description: 'The complete dataset was saved.',
    color: 'success',
    icon: 'i-tabler-download',
  });
}
</script>
