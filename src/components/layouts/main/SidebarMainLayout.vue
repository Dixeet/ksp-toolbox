<template>
  <USidebar
    breakpoint="lg"
    :ui="{
      container: 'h-full',
      body: 'px-2',
      footer: 'py-1',
    }"
  >
    <template #header="{ close }">
      <div class="mx-auto flex items-center">
        <ULink
          class="flex-1 outline-primary/25 focus-visible:outline-3 rounded-md shrink-0 font-bold text-highlighted flex items-end gap-1.5"
          to="/"
          >KSP Toolbox</ULink
        >
        <UButton
          @click="close()"
          icon="i-tabler-x"
          variant="ghost"
          class="absolute right-1 cursor-pointer lg:hidden"
        />
      </div>
    </template>
    <template #default>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        :ui="{ link: 'p-1.5 overflow-hidden' }"
      >
      </UNavigationMenu>
    </template>
    <template #footer>
      <SettingsSidebarMainLayout />
    </template>
  </USidebar>
</template>

<script setup>

const items = [
  {
    label: 'Toolbox',
    type: 'label',
  },
  {
    label: 'Tools',
    icon: 'i-tabler-calculator',
    to: '/',
  },
  {
    label: 'Data',
    type: 'label',
  },
  {
    label: 'Bodies',
    icon: 'i-tabler-planet',
    to: '/bodies',
  },
];
</script>