<template>
  <SidebarProvider>
    <SidebarMainLayout />
    <div class="w-full">
      <HeaderMainLayout>
        {{ pageTitle }}
      </HeaderMainLayout>
      <main class="w-full">
        <slot />
      </main>
    </div>
  </SidebarProvider>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import HeaderMainLayout from '@/components/layouts/HeaderMainLayout.vue'

const route = useRoute();
const pageTitle = computed(() => route.meta.title || 'KSP Toolbox');
</script>

<style></style>
