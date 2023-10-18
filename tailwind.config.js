/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'three_column': 'repeat(3, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

