<template>
  <Sidebar>
    <SidebarHeader class="text-center border-b h-header flex flex-col items-center justify-center">
      <RouterLink class="font-semibold text-sm font-heading" to="/">
        <span>KSP Toolbox</span>
      </RouterLink>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel class="font-heading">Toolbox</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton as-child>
                <RouterLink
                  class="[.router-link-active]:bg-accent [.router-link-active]:font-bold"
                  to="/"
                >
                  <PhToolbox weight="regular"/>
                  <span>Tools</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

<script setup>
import { PhToolbox } from '@phosphor-icons/vue';
</script>