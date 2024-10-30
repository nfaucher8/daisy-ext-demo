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

const additionalColors = {
  BASE_100: "Base 100",
  BASE_200: "Base 200",
  BASE_300: "Base 300",
  BASE_CONTENT: "Base Content",
  PRIMARY_CONTENT: "Primary Content",
  SECONDARY_CONTENT: "Secondary Content",
  ACCENT_CONTENT: "Accent Content",
  NEUTRAL_CONTENT: "Neutral Content",
  INFO_CONTENT: "Info Content",
  SUCCESS_CONTENT: "Success Content",
  WARNING_CONTENT: "Success Content",
  ERROR_CONTENT: "Success Content"
}
</script>
<template>
  <div class="px-16 max-w-7xl mx-auto">
    <h1 id="basic" class="text-4xl font-bold pb-2">Basic Colors</h1>
    <p>These colors are mixed against <code>base-100</code></p>
    <br />

    <template v-for="(name, key) in colors">
      <h2 :id="name.toLowerCase()" class="text-2xl font-bold">{{ name }}</h2>
      <div class="flex justify-center p-4">
        <Palette :firstColor="Color[key]" />
      </div>
      <br />
    </template>

    <h1 id="additional" class="text-4xl font-bold pb-2">Additional Colors</h1>
    <p>
      These colors are not very useful on their own and should only be used with
      <RouterLink
        to="/colors/advanced"
        class="link text-primary-800-base-content hover:text-primary-400-base-content"
        >advanced colors</RouterLink
      >.
    </p>
    <br />

    <template v-for="(name, key) in additionalColors">
      <h2 :id="name.replace(/\s+/g, '-').toLowerCase()" class="text-2xl font-bold">{{ name }}</h2>
      <div class="flex justify-center p-4">
        <Palette :firstColor="Color[key]" />
      </div>
      <br />
    </template>
  </div>
</template>
