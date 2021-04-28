module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mygrey': '#F2F2F2',
        'btngrey': '#4E4E4E',
        'textplace': '#6A6A6A',
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
