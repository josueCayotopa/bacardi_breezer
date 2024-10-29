/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'breezer-yellow': '#FFD700', // Ajusta este color según el Pantone exacto de Bacardi Breezer
        'breezer-black': '#000000',
      },
    },
  },
  plugins: [],
}
