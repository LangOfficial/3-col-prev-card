/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'hsl(31, 77%, 52%)',
          600: 'hsl(184, 100%, 22%)',
          700: 'hsl(179, 100%, 13%)',
        },
        neutralC: {
          0: 'hsla(0, 0%, 100%, 0.75)',
          100: 'hsl(0, 0%, 95%)',
        },
      },
      fontFamily: {
        primary: 'Lexend Deca',
        secondary: 'Big Shoulders Display'
      },
    },
  },
  plugins: [],
}