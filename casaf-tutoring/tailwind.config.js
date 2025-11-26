/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        casafBlue: "#003366",
        casafGold: "#fbbf24",
      },
    },
  },
  plugins: [],
};