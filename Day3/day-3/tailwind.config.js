/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BF40BF",
        secondary: "#FFC0CB",
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-linear': 'linear-gradient(to right, #BF40BF, #FFC0CB)',
        },
      }
    },
  },
  plugins: [],
}