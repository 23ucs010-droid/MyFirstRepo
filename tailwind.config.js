/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#6B21A8",
        primary: "#7C3AED",
        primaryLight: "#A78BFA"
      }
    },
  },
  plugins: [],
}
