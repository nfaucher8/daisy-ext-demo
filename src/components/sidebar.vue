<script setup lang="ts">
import { ShapeIntersect16Filled } from "@vicons/fluent"
import { Book2, ChevronDown, Shape } from "@vicons/tabler"
import { Icon } from "@vicons/utils"
import { ref } from "vue"
import { useRouter } from "vue-router";


const router = useRouter()

const showDocs = ref(true)
const showColors = ref(true)

const toggleDocs = (state?: boolean) => {
  if (state === undefined) {
    showDocs.value = !showDocs.value
    return
  }

  showDocs.value = state
}

const toggleColors = (state?: boolean) => {
  if (state === undefined) {
    showColors.value = !showColors.value
    return
  }

  showColors.value = state
}

const activeRoute = (expectedRoute: string) => {
  return router.currentRoute.value.fullPath === expectedRoute ? "active": ""
}
</script>
<template>
  <div>
    <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="colorsicongradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="30%" stop-color="#0284c7" />
          <stop offset="70%" stop-color="#34d399" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  <div class="navbar">
    <div class="flex gap-2 items-center">
      <div class="text-xl font-bold px-2">daisy-ext</div>
      <div class="link link-hover font-mono text-xs leading-1 -mb-1.5">1.0.0</div>
    </div>
  </div>
  <ul class="menu gap-0.5">
    <li>
      <div @click="toggleDocs()">
        <Icon class="text-orange-400" size="23">
          <Book2 />
        </Icon>
        Docs
        <Icon size="16" class="transition-transform" :class="showDocs ? 'rotate-180' : ''">
          <ChevronDown />
        </Icon>
      </div>
    </li>
    <li v-show="showDocs">
      <ul class="menu gap-0.5 py-0 pe-0">
        <li><RouterLink to="/docs/about" :class="activeRoute('/docs/about')">About</RouterLink></li>
        <li><RouterLink to="/docs/install" :class="activeRoute('/docs/install')">Install</RouterLink></li>
        <li><RouterLink to="/docs/getting-started" :class="activeRoute('/docs/getting-started')">Getting Started</RouterLink></li>
      </ul>
    </li>
    <li>
      <div @click="toggleColors()">
        <Icon class="text-mixed" size="23">
          <ShapeIntersect16Filled class="scale-125" />
        </Icon>
        Colors
        <Icon size="16" class="transition-transform" :class="showColors ? 'rotate-180' : ''">
          <ChevronDown />
        </Icon>
      </div>
    </li>
    <li v-show="showColors">
      <ul class="menu gap-0.5 py-0 pe-0">
        <li><RouterLink to="/colors/basic" :class="activeRoute('/colors/basic')">Basic Colors</RouterLink></li>
        <li><RouterLink to="/colors/advanced" :class="activeRoute('/colors/advanced')">Advanced Colors</RouterLink></li>
      </ul>
    </li>
    <li>
      <RouterLink to="/examples" :class="activeRoute('/examples')">
        <Icon class="text-fuchsia-400" size="23">
          <Shape />
        </Icon>
        Examples
      </RouterLink>
    </li>
  </ul>
</template>
<style>
.xicon.text-mixed svg g path {
  fill: url(#colorsicongradient);
}
</style>
