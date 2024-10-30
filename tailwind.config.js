/** @type {import('tailwindcss').Config} */

const colors = [
  "primary",
  "primary-content",
  "secondary",
  "secondary-content",
  "accent",
  "accent-content",
  "neutral",
  "neutral-content",
  "base-100",
  "base-200",
  "base-300",
  "base-content",
  "info",
  "info-content",
  "success",
  "success-content",
  "warning",
  "warning-content",
  "error",
  "error-content"
]

const shades = [
  "",
  "-50",
  "-100",
  "-150",
  "-200",
  "-250",
  "-300",
  "-350",
  "-400",
  "-450",
  "-500",
  "-550",
  "-600",
  "-650",
  "-700",
  "-750",
  "-800",
  "-850",
  "-900",
  "-950"
]

/**
 * Because we use `bg-${color}-${shade}` in our vue components to generate the style classes tailwind doesn't recognize
 * the styles we are using and doesn't include them in the final build. We can get around this by adding classes to the
 * safelist. This function will generate every possible `bg-` color from `daisy-ext`. This shouldn't be used in
 * production because you probably don't want every possible `bg-` color to be included in your app. The only reason
 * this demo includes all of them is that it shows every single color as an example.
 */
const safelist = []
for (const firstColor of colors) {

  // Build single color styles
  for (const shade of shades) {
    safelist.push(`bg-${firstColor}${shade}`)
  }

  // Build dual color styles
  for (const shade of shades) {
    for (const secondColor of colors) {
      if (shade === "") {
        continue
      }

      safelist.push(`bg-${firstColor}${shade}-${secondColor}`)
    }
  }
}

export default {
  content: [
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('daisy-ext'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"],
  },
  safelist
}

