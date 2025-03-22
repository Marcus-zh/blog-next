const { heroui } = require("@heroui/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MiSans VF", "sans-serif"],
        mono: ["Monaspace Krypton", "monospace", "Consolas", "Courier New"],
      },
    },
  },
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#f1f1f1",
          },
        },
        dark: {
          colors: {
            background: "#1C1C1E",
            content1: "#303030"
          },
        },
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
