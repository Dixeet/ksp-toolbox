<template>
  <UContainer>
    <div class="flex items-center justify-between gap-4 my-4">
      <USelectMenu
        v-model="appStore.bodiesPagePack"
        :items="availablePacks"
        multiple
        placeholder="Filter by pack..."
        icon="i-tabler-world-map"
        class="w-64"
        :search-input="false"
      />
    </div>
    <BodiesTable :data="bodies" :filter="appStore.bodiesPagePack" />
  </UContainer>
</template>

<script setup>
import { useGlobalState } from '@/composables/state.js';
import { computed } from 'vue';

const { bodies, appStore } = useGlobalState();

const availablePacks = computed(() => {
  const packs = new Set(bodies.value.map((body) => body.pack).filter(Boolean));
  return Array.from(packs).sort();
});
</script>
