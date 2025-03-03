/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        'top-only': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)', 
        'bottom-only': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
    animation: {
      grid: "grid 15s linear infinite",
    },
    keyframes: {
      grid: {
        "0%": { transform: "translateY(-50%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
  },
  plugins: [],
}

