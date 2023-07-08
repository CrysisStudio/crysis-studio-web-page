/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        red: '#ff4141',
        dark: '#212121'
      },
      grayscale: {
        90: '90%'
      }
    },
    transitionProperty: {
      position: 'top, right, bottom, left',
      transform: 'transform'
    }
  },
  plugins: []
}
