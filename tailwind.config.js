/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f8f8f8',
        dark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'gold': '0 10px 30px rgba(217, 119, 6, 0.2)',
      },
    },
  },
  plugins: [],
}