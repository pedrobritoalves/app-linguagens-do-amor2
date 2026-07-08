/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        rose: {
          50: '#fff7f6',
          100: '#fff0ed',
          200: '#ffdeda',
          300: '#ffc3bc',
          400: '#ff9b8e',
          500: '#ff7563',
          600: '#ef543d',
          700: '#d23b27',
          800: '#b03224',
          900: '#923026',
        },
        ocean: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcddff',
          300: '#8ec8ff',
          400: '#59a8ff',
          500: '#3385fc',
          600: '#1d66f0',
          700: '#1551dd',
          800: '#1842b4',
          900: '#1a3c8e',
        },
        sand: {
          50: '#fbf8f4',
          100: '#f5efe6',
          200: '#ebe0cf',
          300: '#dccab1',
          400: '#c9ad87',
          500: '#bd9568',
          600: '#ae8055',
          700: '#926848',
          800: '#78563f',
          900: '#63483a',
        },
      },
    },
  },
  plugins: [],
};
