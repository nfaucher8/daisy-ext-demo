<script setup lang="ts">
import Nav from "@/components/nav.vue";
</script>
<template>
  <Nav>
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback> </template>
    </Suspense>
  </Nav>
</template>
