/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src//*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
}

