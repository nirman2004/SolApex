/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
      spacing:{
        '50': '5rem',
      },
      fontFamily: {
        'lexend-exa' : ['"Lexend Exa"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui'),],
}

