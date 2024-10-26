import { createApp, onBeforeMount } from "vue"

import App from "./App.vue"
import "./_tailwind.css"

import { loadSavedTheme } from "@/theme"

loadSavedTheme().then(() => {})

createApp(App).mount("#app")
