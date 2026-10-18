/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          deep: '#060606',
          surface: '#101010',
          card: '#141414',
          raised: '#1a1a1a',
          line: 'rgba(255,255,255,0.08)',
          lineSoft: 'rgba(255,255,255,0.05)',
        },
        ash: {
          100: '#f4f4f3',
          200: '#e6e6e3',
          300: '#cfcfca',
          400: '#9a9a95',
          500: '#6b6b66',
          600: '#444440',
        },
      },
    },
  },
  plugins: [],
};
