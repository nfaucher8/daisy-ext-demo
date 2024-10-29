import { createApp, onBeforeMount } from "vue"

import "./_tailwind.css"

import App from "./App.vue"
import router from "./router"
import { loadSavedTheme } from "@/theme"

loadSavedTheme().then(() => {})

const app = createApp(App)

app.use(router)

app.mount("#app")
