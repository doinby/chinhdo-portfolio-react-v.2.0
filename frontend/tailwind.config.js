/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MinigapLight', 'san-serif'],
        sansBold: ['MinigapBold', 'san-serif'],
      },
    },
  },
  plugins: [],
};
