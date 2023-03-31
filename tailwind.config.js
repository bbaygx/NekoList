/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily:{
        alkatra: ['"Alkatra"',...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

