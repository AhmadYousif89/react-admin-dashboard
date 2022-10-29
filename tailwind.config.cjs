/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      textColor: {
        base: {
          color: 'var(--text-color)',
        },
        highlight: 'var(--text-highlight)',
        second: 'var(--text-color-second)',
      },
      backgroundColor: {
        base: {
          color: 'var(--bg-color)',
        },
        'gray-1': 'var(--bg-color-gray-1)',
        'gray-2': 'var(--bg-color-gray-2)',
        sideMenu: 'var(--bg-side-color)',
        card: 'var(--card-bg-color)',
      },
      stroke: {
        with: {
          red: 'orangered',
        },
      },
    },
  },
  plugins: [],
};
