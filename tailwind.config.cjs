/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark__veryDarkBlue: 'hsl(235, 21%, 11%)',
        dark__desaturatedBlue: 'hsl(235, 24%, 19%)',
        dark__lightGrayishBlue: 'hsl(234, 39%, 85%)',
        dark__hoverLightGrayishBlue: 'hsl(236, 33%, 92%)',
        dark__darkGrayishBlue: 'hsl(234, 11%, 52%)',
        dark__veryDarkGrayishBlue: 'hsl(237, 14%, 26%)',
        brightBlue: 'hsl(220, 98%, 61%)',
        paleBlue: 'hsl(192, 100%, 67%)',
        palePink: 'hsl(280, 87%, 65%)',
        light__lightGrayishBlue: 'hsl(236, 33%, 92%)',
        light__lightGray: 'hsl(0, 0%, 98%)',
        light__daryGrayishBlue: 'hsl(236, 9%, 61%)',
        light__veryDarkGrayishBlue: 'hsl(235, 19%, 35%)'
      }
    },
  },
  plugins: [],
}
