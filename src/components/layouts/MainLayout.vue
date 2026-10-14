<template>
  <div class="flex flex-1">
    <USidebar
      v-model:open="open"
      breakpoint="lg"
      :ui="{
        container: 'h-full',
        body: 'px-2'
      }"
    >
      <template #header>
        <ULink
          class="mx-auto outline-primary/25 focus-visible:outline-3 rounded-md shrink-0 font-bold text-highlighted flex items-end gap-1.5"
          to="/"
          >KSP Toolbox</ULink
        >
      </template>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      />
    </USidebar>
    <div class="flex-1">
      <header
        class="h-(--ui-header-height) shrink-0 flex items-center px-4 border-b border-default"
      >
        <UButton
          icon="i-lucide-panel-left"
          color="neutral"
          variant="ghost"
          :aria-label="open ? 'Close sidebar' : 'Open sidebar'"
          @click="open = !open"
          class="lg:hidden"
        />
        <div
          class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full"
        >
          <div class="mx-auto">
            {{ pageTitle }}
          </div>
        </div>
      </header>
      <UMain>
        <RouterView />
      </UMain>
    </div>
  </div>
</template>

<script setup>
import { computed, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageTitle = computed(() => route.meta.title || 'KSP Toolbox');

const open = shallowRef(true);

const items = [
  {
    label: 'Tools',
    icon: 'i-tabler-calculator',
    to: '/',
  },
  {
    label: 'Kerbalism',
    icon: 'i-tabler-wheat',
    to: '/kerbalism',
  },
];
</script>
