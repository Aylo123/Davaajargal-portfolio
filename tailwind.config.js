/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#1a1a1a",
          200: "#1f1f1f",
          300: "#2d2d2d",
          400: "#3d3d3d",
        },
        purple: "#8B5CF6",
        pink: "#EC4899",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
}
