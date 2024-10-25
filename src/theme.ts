import * as localforage from "localforage";

export const themes = [
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

export const changeTheme = async (theme: string) => {
  // Early Exit: Invalid theme
  if (themes.indexOf(theme) <= -1) {
    console.log("Invalid theme selected: ", theme)
    return
  }

  document.querySelector("html")?.setAttribute("data-theme", theme)
  await localforage.setItem("theme", theme)
}

export const loadSavedTheme = async () => {
  const theme = await localforage.getItem("theme");

  await changeTheme(theme);
}
