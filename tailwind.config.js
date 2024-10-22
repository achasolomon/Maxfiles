/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Specify paths to your components
  ],
  theme: {
    extend: {
      colors:{
        customBg: '#333547',
        customBtn: '#A7A7F3',
        generalBg: '#ECECF1',
        borderColor: '#707070'
      },
      fontFamily: {
        sarabun: ['Sarabun', 'sans-serif'], // Add Sarabun font
      },
      height: {
        15: '3.75rem', // 60px
        18: '4.49rem', // 68px
      },
      width:{
        42: '10.5rem',
        45: '12.5rem',
      },
    },
  },
  plugins: [],
}

