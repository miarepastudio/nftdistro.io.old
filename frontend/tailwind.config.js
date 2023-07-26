/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: 'ClashDisplay',
        body: 'DM Sans',
      },
      colors: {
        gray: {
          light: '#6b6b6b',
        },
        milk: {
          light: '#fAfAfA',
          DEFAULT: '#f4f4f4',
        },
        pink: '#ff57ba',
        orange: '#ff8188',
        grape: {
          light: '#b073ff',
          dark: '#6e56ff',
        },
        aqua: {
          light: '#48fe9c',
          dark: '#56c2ff',
        },
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
