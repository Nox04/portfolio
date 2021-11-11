const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        intro: "url('/static/images/header-bg.jpg')",
      }),
    },
    colors: {
      ...colors,
      brand: '#00f7ff',
      'brand-dark': '#00adb5',
      'brand-darker': '#00444E',
      'brand-gray': '#181a1b',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
