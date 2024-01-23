/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  presets: [keepPreset],
  theme: {
    extend: {
      color: {
        'oscuroPrincipal': '#303030',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

