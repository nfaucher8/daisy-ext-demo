<script setup lang="ts">
import Sidebar from "@/components/sidebar.vue";
import Navbar from "@/components/navbar.vue";
</script>
<template>
  <div class="fixed inset-y-0 z-50 flex flex-col w-60 bg-base-100">
    <Sidebar />
  </div>
  <div class="fixed inset-0 grow flex flex-col overflow-y-hidden pl-60">
    <!-- Uncomment below for a shadow instead of a line -->
    <!--<div class="top-0 h-16 shadow shadow-base-content-200">-->
    <div class="top-0 h-16 ring-1 ring-base-content-200 z-50">
      <Navbar />
    </div>
    <main class="overflow-y-auto h-full">
      <div class="-top-2 sticky bg-base-100 h-2 z-50"></div>
      <div class="top-0 sticky h-0.5"></div>
      <slot />
    </main>
  </div>
</template>
