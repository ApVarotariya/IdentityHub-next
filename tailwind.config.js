/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        aeonik: ["Aeonik TRIAL", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
