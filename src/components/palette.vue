<script setup lang="ts">
import { type Color } from "@/constants"

import Swatch from "@/components/swatch.vue"

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

const props = defineProps<{
  firstColor: Color,
  secondColor?: Color
}>()
</script>
<template>
<div class="grid grid-cols-4 gap-2">
  <template v-for="shade in shades">
    <div>
      <Swatch :firstColor="firstColor" :shade="shade" />
      <code>{{firstColor}}{{shade ? '-' : ''}}{{shade}}</code>
    </div>
  </template>
</div>
</template>
