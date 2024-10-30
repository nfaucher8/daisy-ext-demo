<script setup lang="ts">
import Palette from "@/components/palette.vue"
import { Color } from "@/constants"

const colors = {
  PRIMARY: "Primary",
  SECONDARY: "Secondary",
  ACCENT: "Accent",
  NEUTRAL: "Neutral",
  INFO: "Info",
  SUCCESS: "Success",
  WARNING: "Warning",
  ERROR: "Error"
}

const mixedColors = {
  PRIMARY: "Primary",
  SECONDARY: "Secondary",
  ACCENT: "Accent",
  NEUTRAL: "Neutral",
  INFO: "Info",
  SUCCESS: "Success",
  WARNING: "Warning",
  ERROR: "Error",
  BASE_200: "Base 200",
  BASE_300: "Base 200",
  BASE_CONTENT: "Base Content",
}
</script>
<template>
  <div class="px-16 max-w-7xl mx-auto">
    <h1 id="advanced" class="text-4xl font-bold pb-4">Advanced Colors</h1>
    <p>
      Advanced colors in
      <b>daisy-ext</b>
      are comprised of two
      <b>daisyUI</b>
      colors plus a shade value. Advanced colors are mixed against each other and the shade value is the percentage of
      the first color that will be in the final result.
    </p>
    <br/>
    <p>
      For example
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">bg-primary-60-secondary</code> will be
      60% primary and 40% secondary.
    </p>
    <br />
    <p>
      The most common use of advanced colors is to mix against that colors
      <code class="bg-neutral text-neutral-content rounded-lg p-1 pb-0.5 text-sm">-content</code>. This will create a
      result that will always have contrast with selected color.
    </p>
    <br />
    <template v-for="(name, key) in colors">
        <h2 :id="name.toLowerCase()" class="text-2xl font-bold">{{ name }}</h2>
        <div class="flex justify-center p-4">
          <Palette :firstColor="Color[key]" :secondColor="Color[`${key}_CONTENT`]"/>
        </div>
        <br />
      <template v-for="(mixedName, mixedKey) in mixedColors">
        <template v-if="key != mixedKey">
          <div class="flex justify-center p-4">
            <Palette :firstColor="Color[key]" :secondColor="Color[mixedKey]"/>
          </div>
          <br />
        </template>
      </template>
    </template>
  </div>
</template>
