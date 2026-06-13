/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        dm: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8D5A3',
          dim: 'rgba(201,168,76,0.2)',
        },
        ink: {
          DEFAULT: '#080808',
          surface: '#111111',
          card: '#1a1a1a',
          overlay: '#0f0f0f',
          mid: '#131313',
        },
        warm: {
          white: '#F5F0E8',
          muted: '#888880',
        },
      },
    },
  },
  plugins: [],
};
