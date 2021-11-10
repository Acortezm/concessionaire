module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {backgroundColor: theme => ({

    ...theme('colors'),

    'CBlue': '#3490dc',

    'CCrema': '#FEF9EF',

    'CNaranja': '#FF865E',
    'CAmarillo': '#FEE440',
   }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
