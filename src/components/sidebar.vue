<script setup lang="ts">
import { ShapeExclude20Filled } from "@vicons/fluent"
import { Book2 } from "@vicons/tabler"
import { Icon } from "@vicons/utils"
</script>
<template>
  <div>
    <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="colorsicongradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="50%" stop-color="#16a34a" />
          <stop offset="50%" stop-color="#6b21a8" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="w-60">
    <ul class="menu">
      <li>
        <a>
          <Icon class="text-orange-400" size="23">
            <Book2 />
          </Icon>
          Docs
        </a>
      </li>
      <li>
        <a>
          <Icon class="text-mixed" size="23">
            <ShapeExclude20Filled />
          </Icon>
          Colors
        </a>
      </li>
    </ul>
  </div>
</template>
<style>
.xicon.text-mixed svg g path {
  fill: url(#colorsicongradient);
}
</style>
