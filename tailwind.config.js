const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|card|checkbox|chip|code|divider|image|input|kbd|modal|navbar|scroll-shadow|skeleton|snippet|spinner|table|tabs|popover|ripple|spacer).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MiSans VF", "sans-serif"],
        mono: ["Monaspace Krypton","monospace","Consolas",'Courier New']
      },
    },
  },
  plugins: [nextui(), require("@tailwindcss/typography")],
};
