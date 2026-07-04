/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#1E293B",
        dark: "#0F172A",
        accent: "#38BDF8"
      }
    },
  },
  plugins: [],
}