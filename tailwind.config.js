/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdfbf4',
          100: '#fcf6e3',
          500: '#D4AF37', // Gold
          600: '#D4AF37', // Force buttons/links to use the bright gold
          700: '#D4AF37', // Force hover states to use bright gold
        },
        secondary: {
          500: '#F5E6A7', // Champagne Gold
          600: '#e5d185',
        },
        dark: {
          bg: '#0A0A0A',
          surface: '#1A1A1A',
          card: '#242424',
          border: '#D4AF37',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
