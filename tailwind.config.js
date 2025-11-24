/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        'teal': {
          DEFAULT: '#00B2A9',
          '50': '#e6f9f8',
          '100': '#ccf3f1',
          '200': '#99e7e3',
          '300': '#66dbd5',
          '400': '#33cfc7',
          '500': '#00B2A9',
          '600': '#008e87',
          '700': '#006b65',
          '800': '#004743',
          '900': '#002422',
        },
        'burnt-orange': '#D97706',
      },
      spacing: {
        'scaled': {
          '1': '0.75rem',
          '2': '1.5rem',
          '3': '2.25rem',
          '4': '3rem',
          '5': '3.75rem',
          '6': '4.5rem',
        }
      },
      maxWidth: {
        'scaled-7xl': '900px',
        'scaled-6xl': '750px',
        'scaled-5xl': '600px',
        'scaled-4xl': '525px',
        'scaled-3xl': '450px',
        'scaled-2xl': '375px',
      }
    },
  },
  plugins: [],
};
