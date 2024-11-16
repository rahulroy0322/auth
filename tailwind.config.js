const { colors } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#e11d48',
        background: 'var(--bg)',
        foreground: 'var(--fg)',
      },
    },
  },
  plugins: [],
};
