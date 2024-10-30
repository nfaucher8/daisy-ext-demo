<script setup lang="ts">
import Navbar from "@/components/navbar.vue"
import Sidebar from "@/components/sidebar.vue"
</script>
<template>
  <div class="fixed inset-y-0 z-50 flex flex-col w-60 bg-base-100">
    <Sidebar />
  </div>
  <div class="fixed inset-0 grow flex flex-col overflow-y-hidden pl-60">
    <!-- Uncomment below for a shadow instead of a line -->
    <!--<div class="top-0 h-16 shadow shadow-base-content-200">-->
    <div class="top-0 h-16 z-50">
      <Navbar />
    </div>
    <div class="top-0 h-[1px] border-b border-base-content-200 z-10"></div>
    <main class="overflow-y-auto h-full -mt-[1px]">
      <div class="-top-2 sticky bg-base-100 h-2 z-20"></div>
      <div class="top-0 sticky h-0.5"></div>
      <slot />
    </main>
  </div>
</template>
