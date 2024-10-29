<script setup lang="ts">
import Navbar from "@/components/navbar.vue"
import Sidebar from "@/components/sidebar.vue"
</script>
<template>
  <Navbar />
  <Sidebar />
  <Suspense>
    <template #default>
      <RouterView/>
    </template>
    <template #fallback>
      
    </template>
  </Suspense>
</template>
