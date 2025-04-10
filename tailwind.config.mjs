/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)' }, // Start and end at normal scale
          '50%': { transform: 'scale(1.1)' },    // Zoom in to 110% at the middle
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        zoomInOut: 'zoomInOut 3s ease-in-out infinite', // Define the animation
        'slide-right': 'slide-right 1s ease-in-out infinite',
        float: 'float 2s ease-in-out infinite', // Define the float animation
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

