/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "vip-cartoon": ["vipCartoon", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        "light-green": "#7c9070",
        "light-yellow": "#fee8b0",
      },
    },
  },
  plugins: [],
};
