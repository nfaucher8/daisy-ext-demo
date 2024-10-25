import { createApp } from "vue"
import {loadSavedTheme} from "@/theme";

import App from "./App.vue"
import "./_tailwind.css"

await loadSavedTheme()

createApp(App).mount("#app")
