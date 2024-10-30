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
    <template v-if="secondColor">
      <template v-for="shade in shades" :key="shade">
        <template v-if="shade">
          <div>
            <Swatch :firstColor="firstColor" :shade="shade" :secondColor="secondColor"/>
            <code class="text-xs">{{ firstColor }}-{{ shade }}-{{ secondColor }}</code>
          </div>
        </template>
        <template v-else>
          <div>
            <Swatch :firstColor="firstColor" />
            <code class="text-xs">{{ firstColor }}</code>
          </div>
        </template>
      </template>
    </template>
    <template v-else>
      <template v-for="shade in shades" :key="shade">
        <div>
          <Swatch :firstColor="firstColor" :shade="shade" />
          <code>{{ firstColor }}{{ shade ? "-" : "" }}{{ shade }}</code>
        </div>
      </template>
    </template>
  </div>
</template>
