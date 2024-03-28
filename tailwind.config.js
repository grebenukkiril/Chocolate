/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {

    },
    screens: {
      '2xl': {'max': '1536px'},
      xl: {'max': '1280px'},
      lg: {'max': '1024px'},
      md: {'max': '768px'},
      sm: {'max': '640px'},
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '32px',
        sm: '20px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}

