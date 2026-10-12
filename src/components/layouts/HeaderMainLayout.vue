<script setup lang="ts"></script>
<template>
  <header class="text-center border-b h-header flex items-center sticky top-0 bg-background">
    <SidebarTrigger class="size-header rounded-none cursor-pointer md:hidden" />
    <div class="flex-1 font-semibold font-heading text-muted-foreground text-sm">
      <slot />
    </div>
    <div class="size-header"></div>
  </header>
</template>