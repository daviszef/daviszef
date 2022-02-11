module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        bloby: "bloby 7s infinite"
      },
      keyframes: {
        blob: {
          "0%":{
            transform: "translateY(0) "
          },
          "33%":{
            transform: "translateY(-12%) "
          },
          "66%":{
            transform: "translateY(-25%) "
          },
          "100%":{
            transform: "translateY(0) "
          },
        },
        bloby: {
          "0%":{
            transform: "translate(0px, 0px) scale(1) "
          },
          "33%":{
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          },
        }
      },

      colors: {
        'mygrey': '#F2F2F2',
        'btngrey': '#4E4E4E',
        'textplace': '#6A6A6A',
        'textpurple': '#221E41',
        'lightpurple': '#6937FF'
      },
      fontFamily: {
        inter: ['Inter']
      }
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'visited'],
    },
  },
  plugins: [],
}
