/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-custom": "#e75129",
        "azul-semi-oscuro": "#314499",
        "azul-oscuro": "#0f1875",
        "azul-claro": "#0062d4",
        "azul-negro": "#1d1b33",
        "gris-oscuro": "#b3b3b3",
        "gris-claro": "#ebebeb",
      }
    }
  },
  plugins: [],
} 