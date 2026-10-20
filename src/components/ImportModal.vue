<template>
  <UModal
    v-model:open="isImportModalOpen"
    title="Import"
    description="Import bodies from a JSON file or paste JSON below. Use Export to see the expected structure."
    :ui="{ content: 'w-full max-w-3xl' }"
    @after:leave="resetImport"
  >
    <UButton label="Import" icon="i-tabler-file-import" color="primary" variant="outline" />

    <template #body>
      <div class="space-y-4">
        <UFileUpload
          v-model="selectedFile"
          accept=".json,application/json"
          label="Choose a JSON file"
          description="Drop a JSON here or click to browse."
          variant="area"
          :preview="false"
          @update:model-value="handleFileChange"
        />
        <UTextarea
          v-model="json"
          :rows="10"
          autoresize
          :maxrows="24"
          placeholder="Paste the JSON here"
          aria-label="JSON to import"
          class="w-full"
        />
      </div>
    </template>

    <template #footer="{ close }">
      <div class="flex justify-between w-full">
        <UButton
          label="Import"
          variant="soft"
          color="success"
          icon="i-tabler-file-import"
          @click="importJson(close)"
        />
        <UButton label="Cancel" color="error" variant="ghost" @click="close" />
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { useToast } from '@nuxt/ui/composables';
import { shallowRef } from 'vue';

const emit = defineEmits(['import']);

const isImportModalOpen = shallowRef(false);
const selectedFile = shallowRef(null);
const json = shallowRef('');
const toast = useToast();

function handleFileChange(file) {
  selectedFile.value = file;

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    json.value = typeof reader.result === 'string' ? reader.result : '';
  };
  reader.onerror = () => {
    toast.add({
      title: 'File could not be read',
      description: 'Choose another JSON file or paste the exported data instead.',
      color: 'error',
      icon: 'i-tabler-alert-circle',
    });
  };
  reader.readAsText(file);
}

function importJson(close) {
  if (!json.value.trim()) {
    toast.add({
      title: 'JSON is required',
      description: 'Select a JSON file or paste the exported bodies data.',
      color: 'error',
      icon: 'i-tabler-alert-circle',
    });
    return;
  }

  let parsedJson;
  try {
    parsedJson = JSON.parse(json.value);
  } catch {
    toast.add({
      title: 'Invalid JSON',
      description: 'Check the JSON syntax and try again.',
      color: 'error',
      icon: 'i-tabler-alert-circle',
    });
    return;
  }

  if (!Array.isArray(parsedJson)) {
    toast.add({
      title: 'Invalid bodies data',
      description: 'The imported JSON must be an array like the data produced by Export.',
      color: 'error',
      icon: 'i-tabler-alert-circle',
    });
    return;
  }

  emit('import', parsedJson);
  close();
}

function resetImport() {
  selectedFile.value = null;
  json.value = '';
}
</script>
