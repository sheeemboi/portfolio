/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff5f2",
          100: "#fff1ee",
          200: "#ffe4de",
          300: "#ffd5cc",
          400: "#ffbcad",
          500: "#fe795d",
          600: "#ef562f",
          700: "#eb4f27",
          800: "#cc4522",
          900: "#a5371b",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Use "font-sans" in your classes
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
