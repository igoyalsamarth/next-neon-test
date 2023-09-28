/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
    screens: {
      'sm': {'min': '0px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '990px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '991px', 'max': '1200px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
  },
  plugins: [],
}
