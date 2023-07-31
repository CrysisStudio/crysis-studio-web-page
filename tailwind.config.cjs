/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        rojo: '#ff4141',
        dark: '#212121',
        gray: {
          100: '#f5f5f5',
          opacity: '#f5f5f544'
        }
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
  plugins: [require('tailwindcss-animated')]
}
