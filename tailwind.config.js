/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        web: ["News Cycle", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

