<script setup lang="ts">
const DAISYUI_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset"
]

const updateTheme = (theme: string) => {
  alert(theme)
}
</script>
<template>
  <div class="navbar">
    <div class="flex-1 gap-2 content-center">
      <div class="text-xl font-bold px-2">daisy-ext</div>
      <div class="link link-hover inline-block font-mono text-xs pt-0.5">1.0.0</div>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <button role="button" class="btn btn-ghost">
          <span class="font-normal">Theme</span>
          <svg
            width="12px"
            height="12px"
            class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </button>
        <div
          class="menu dropdown-content bg-base-200 text-base-content rounded-box z-[1] w-56 h-[28.6rem] max-h-[calc(100vh-10rem)] p-2 mt-0.5 shadow overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5"
        >
          <div class="grid grid-cols-1 gap-3">
            <template v-for="theme in DAISYUI_THEMES" :key="theme">
              <button
                @click="updateTheme(theme)"
                class="outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
                data-act-class="[&amp;_svg]:visible"
                :data-set-theme="theme"
              >
                <span
                  class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
                  :data-theme="theme"
                >
                  <span class="grid grid-cols-5 grid-rows-3">
                    <span
                      class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="invisible h-3 w-3 shrink-0"
                      >
                        <path
                          d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                        ></path>
                      </svg>
                      <span class="flex-grow text-sm">{{ theme }}</span>
                      <span class="flex h-full shrink-0 flex-wrap gap-1">
                        <span class="bg-primary rounded-badge w-2"></span>
                        <span class="bg-secondary rounded-badge w-2"></span>
                        <span class="bg-accent rounded-badge w-2"></span>
                        <span class="bg-neutral rounded-badge w-2"></span>
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
