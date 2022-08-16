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
      'digit': ['72px', {
        letterSpacing: '0.01em',
        lineHeight: '78px',
      }],
      'digit-text': ['16px', {
        letterSpacing: '0.005em',
        lineHeight: '150%',
      }],
      'point': ['34px', {
        letterSpacing: '0.01em',
        lineHeight: '109%',
      }]
    },
    extend: {
      screens: {
        '3xl': '1920px',
      },
      colors: {
        'digit': '#ed7138',
        'digit-text': '#0f1214',
        'point': '#e0e6e9',
      },
    }
  },
  plugins: [],
}