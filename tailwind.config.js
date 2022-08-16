/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      base: ['16px', {
        letterSpacing: '0.02em',
        lineHeight: '150%',
        fontWeight: '400'
      }],
      '3xl': ['54px', {
        letterSpacing: '0.01em',
        lineHeight: '130%',
      }],
      '2xl': ['30px', {
        letterSpacing: '0.05em',
        lineHeight: '140%',
      }],
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
    }
  },
  plugins: [],
}