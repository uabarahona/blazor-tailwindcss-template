const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './**/*.razor',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      black: colors.black,
      white: colors.white,
      orange: colors.orange
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
