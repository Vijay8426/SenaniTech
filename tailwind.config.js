/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'median': '1400px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1570px',
      '4xl' : '1680px',
      '5xl' : '1730px',
      '6xl' : '1780px',
      '7xl' :  '1830px',
      '8xl' :  '1880px',
      '9xl'  : '1930px',
      '10xl' : '1980px'
    },
    extend: {
      
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

