<template>
  <Suspense>
  <MainLayout>
    <RouterView />
  </MainLayout>
  </Suspense>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>
