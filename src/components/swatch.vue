<script setup lang="ts">
import { Color } from "@/constants"

const props = defineProps<{
  firstColor: Color,
  secondColor?: Color,
  shade?: number
}>()
</script>
<template>
  <template v-if="props.secondColor && props.shade">
    <div class="h-16 w-48 rounded-btn" :class="`bg-${firstColor}-${shade}-${secondColor}`" />
  </template>
  <template v-else-if="props.shade">
    <div class="h-16 w-48 rounded-btn" :class="`bg-${firstColor}-${shade}`" />
  </template>
  <template v-else>
    <div class="h-16 w-48 rounded-btn" :class="`bg-${firstColor}`" />
  </template>
</template>
