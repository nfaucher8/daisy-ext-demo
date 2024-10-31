import { createRouter, createWebHashHistory } from "vue-router"
import { routes } from "vue-router/auto-routes"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // pass the generated routes written by unplugin-vue-router
  routes
})

// WORKAROUND: "Bootstrap" navigation when navigating to a specific URL
if (window.location.pathname !== "/") {
  const routeString = window.location.href.replace(window.location.origin, "")
  const route = router.resolve(routeString)
  if (route.matched.length > 0) {
    router.replace({ path: routeString })
  }
}

export default router
