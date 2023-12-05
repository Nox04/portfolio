module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#00f7ff',
        'brand-dark': '#00adb5',
        'brand-darker': '#00444E',
        'brand-gray': '#181a1b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
