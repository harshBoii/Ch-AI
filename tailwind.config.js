/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",  // 👈 this is the important part
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

