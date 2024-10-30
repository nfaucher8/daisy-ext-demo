<script setup lang="ts">
import { Color } from "@/constants"
import Palette from "@/components/palette.vue";

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

</script>
<template>
  <div class="px-16 max-w-7xl mx-auto">
    <h1 id="basic" class="text-4xl font-bold">Basic Colors</h1>
    <p>Some text or something</p>
    <br/>

    <template v-for="(name, key) in colors">
      <h2 :id="name" class="text-2xl font-bold">{{name}}</h2>
      <div class="flex justify-center p-4">
        <Palette :firstColor="Color[key]" />
      </div>
      <br/>
    </template>

    <h1 id="additional" class="text-4xl font-bold">Additional Colors</h1>
    <p>Some text or something</p>
    <br/>

    <Palette :firstColor="Color.BASE_100" />
    <Palette :firstColor="Color.BASE_200" />
    <Palette :firstColor="Color.BASE_300" />
    <Palette :firstColor="Color.BASE_CONTENT" />

    <Palette :firstColor="Color.PRIMARY_CONTENT" />
    <Palette :firstColor="Color.SECONDARY_CONTENT" />
    <Palette :firstColor="Color.ACCENT_CONTENT" />
    <Palette :firstColor="Color.NEUTRAL_CONTENT" />
    <Palette :firstColor="Color.INFO_CONTENT" />
    <Palette :firstColor="Color.SUCCESS_CONTENT" />
    <Palette :firstColor="Color.WARNING_CONTENT" />
    <Palette :firstColor="Color.ERROR_CONTENT" />
  </div>
</template>
