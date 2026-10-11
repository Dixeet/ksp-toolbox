<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                class="[.router-link-active]:bg-accent [.router-link-active]:text-sidebar-primary"
                as-child
              >
                <RouterLink to="/">
                  <Home />
                  <span>Home</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem v-for="item in Array.from({ length: 5 })" :key="item">
              <SidebarMenuSkeleton />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>

<script setup>
import { Home } from '@lucide/vue';
</script>