/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./entities/**/*.{js,ts,jsx,tsx}",
    "./queries/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-josefin-sans)', ...fontFamily.sans],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#585E70",
        secondary: "#142966",
        tertiary: "#2E5CE6",
        fourth: "#7086E1",
      }),
      borderColor: ({ theme }) => ({
        ...theme('colors'),
        primary: "#632E8A",
        secondary: "#503878",
      }),
      textColor: {
        primary: "#142966",
        secondary: "#7592EA",
        tertiary: "#2E5CE6",
        fourth: "#4F5364",
        fifth: "#2447B3",
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
