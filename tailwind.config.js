/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'handwritten': ['Shadows Into Light', 'cursive'],
        'marker': ['Permanent Marker', 'cursive'],
        'natural': ['Satisfy', 'cursive'],
      },
      colors: {
        // MD3 Expressive Primary Colors (Brighter & More Readable)
        'primary': {
          '0': '#FFFFFF',
          '10': '#EEF2FF',
          '20': '#E0E7FF',
          '30': '#C7D2FE', // Key color - Soft Indigo
          '40': '#A5B4FC',
          '50': '#818CF8',
          '60': '#6366F1',
          '70': '#4F46E5',
          '80': '#4338CA',
          '90': '#3730A3',
          '95': '#312E81',
          '99': '#1E1B4B',
          '100': '#000000',
        },
        // MD3 Expressive Secondary Colors
        'secondary': {
          '0': '#FFFFFF',
          '10': '#F0F9FF',
          '20': '#E0F2FE',
          '30': '#BAE6FD', // Key color - Sky Blue
          '40': '#7DD3FC',
          '50': '#38BDF8',
          '60': '#0EA5E9',
          '70': '#0284C7',
          '80': '#0369A1',
          '90': '#075985',
          '95': '#0C4A6E',
          '99': '#082F49',
          '100': '#000000',
        },
        // MD3 Expressive Accent Colors
        'accent': {
          '0': '#FFFFFF',
          '10': '#FFF1F2',
          '20': '#FFE4E6',
          '30': '#FDA4AF', // Key color - Rose
          '40': '#FB7185',
          '50': '#F43F5E',
          '60': '#E11D48',
          '70': '#BE123C',
          '80': '#9F1239',
          '90': '#881337',
          '95': '#4C0519',
          '99': '#2D0B11',
          '100': '#000000',
        },
        // Surface colors with lighter tints
        'surface': {
          'dim': '#FFFFFF',
          'base': '#F8FAFC',
          'bright': '#F1F5F9',
          'container-lowest': '#FFFFFF',
          'container-low': '#F8FAFC',
          'container': '#F1F5F9',
          'container-high': '#E2E8F0',
          'container-highest': '#CBD5E1',
        }
      },
      boxShadow: {
        // Lighter shadows for better visibility
        'level1': '0px 1px 3px 1px rgba(51, 65, 85, 0.08), 0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
        'level2': '0px 2px 6px 2px rgba(51, 65, 85, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
        'level3': '0px 1px 3px 0px rgba(51, 65, 85, 0.15), 0px 4px 8px 3px rgba(51, 65, 85, 0.10)',
        'level4': '0px 2px 3px 0px rgba(51, 65, 85, 0.15), 0px 6px 10px 4px rgba(51, 65, 85, 0.10)',
        'level5': '0px 4px 4px 0px rgba(51, 65, 85, 0.15), 0px 8px 12px 6px rgba(51, 65, 85, 0.10)',
      },
      borderRadius: {
        // More dynamic shape scales
        'extra-small': '8px',
        'small': '12px',
        'medium': '16px',
        'large': '24px',
        'extra-large': '32px',
        'pill': '9999px',
      },
      animation: {
        'ripple': 'ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale': 'scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'wave': 'wave 2.5s ease-in-out infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'shine': 'shine 2s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.35' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        scale: {
          '0%': { transform: 'scale(0.95)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-15deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(-25deg)' },
          '100%': { transform: 'translateX(100%) rotate(-25deg)' },
        },
      },
    },
  },
  plugins: [],
});

