/** @type {import('tailwindcss').Config} */
// const { addIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['MiSans VF', 'sans-serif']
      }
    },
  },
  plugins: [
    // addIconSelectors(),
  ],
}

