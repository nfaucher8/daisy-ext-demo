<script setup lang="ts">
import Swatch from "@/components/swatch.vue"
import { type Color } from "@/constants"

const shades = [
  undefined,
  950,
  900,
  850,
  800,
  750,
  700,
  650,
  600,
  550,
  500,
  450,
  400,
  350,
  300,
  250,
  200,
  150,
  100,
  50
]

defineProps<{
  firstColor: Color
  secondColor?: Color
}>()
</script>
<template>
  <div class="grid grid-cols-4 gap-2">
    <template v-for="shade in shades" :key="shade">
      <div>
        <Swatch :firstColor="firstColor" :shade="shade" />
        <code>{{ firstColor }}{{ shade ? "-" : "" }}{{ shade }}</code>
      </div>
    </template>
  </div>
</template>
