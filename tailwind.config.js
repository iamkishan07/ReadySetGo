/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // dark styles turn on when <html> has the "dark" class
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
