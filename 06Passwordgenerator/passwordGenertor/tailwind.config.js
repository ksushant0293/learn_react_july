/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#0a2d4d',
        'custom-light-blue': '#c2eaff',
        "custom-blue" : "#95cbf4",
      },
    },
  },
  plugins: [],
}