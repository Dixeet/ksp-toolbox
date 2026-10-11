<template>
  <SidebarProvider>
    <SidebarMainLayout />
    <main class="w-full">
      <SidebarTrigger class="md:hidden" />
      <slot />
    </main>
  </SidebarProvider>
</template>

<script setup></script>

<style></style>
