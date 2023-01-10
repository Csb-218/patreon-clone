/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation:{
        'slide-infinite' : 'slide-infinite 100s linear infinite ',
        'slide-pause' : 'slide-infinite 100s linear infinite paused'
      },
      keyframes:{
          'slide-infinite': {
          '0%': {transform : 'translate(0)'},
          '100%': {transform : 'translate(-100%)'},
          },
          
    }
      
    },
  },
  plugins: [],
}
