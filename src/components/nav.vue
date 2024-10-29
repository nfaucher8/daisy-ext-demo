<script setup lang="ts">
import Sidebar from "@/components/sidebar.vue";
import Navbar from "@/components/navbar.vue";
</script>
<template>
  <div class="fixed inset-y-0 z-50 flex flex-col w-60">
    <Sidebar />
  </div>
  <div class="fixed inset-0 grow flex flex-col overflow-y-hidden pl-60">
    <div class="top-0 h-16">
      <Navbar />
    </div>
    <main class="overflow-y-auto h-full">
      <slot />
    </main>
  </div>
</template>
