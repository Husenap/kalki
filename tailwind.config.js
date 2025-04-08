// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#F5F5F7", // Warm off-white
            foreground: "#1F1F1F", // Dark contrast for readability
            primary: {
              foreground: "#000000",
              DEFAULT: "#2DBA4E", 
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#3B82F6", 
            },
          },
        },
        dark: {
          colors: {
            background: "#1F1F1F", // Deep charcoal
            foreground: "#F5F5F7", // Light warm text
            primary: {
              foreground: "#000000",
              DEFAULT: "#2DBA4E", 
            },
            secondary: {
              foreground: "#000000",
              DEFAULT: "#3B82F6", 
            },
          },
        },
      },
    })
  ],
};