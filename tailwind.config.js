/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      '2xl': 32,
      'xl': 24,
      'lg': 20,
      'md': 18,
      'sm': 16,
      'xs': 14,
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      foreground: '#CDD6F4',
      background: {
        primary: '#11111B',
        secondary: '#1E1E2E',
        tertiary: '#313244',
        red: '#F38BA8'
      },
      scrollbar: {
        background: '#181825',
        tracker: '#313244',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter'
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },                                                                                         
  plugins: [],
}