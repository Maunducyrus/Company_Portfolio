/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': {
          'primary': '#053b62',    // Dark blue from icon - logo
          'secondary': '#0d7c79',  // Teal from icon - logo
          'light': '#e6f3ff',      // Light blue for backgrounds
          'accent': '#1e7dd6',     // Medium blue 
      }
    }
    },
  },
  plugins: [],
};
