/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dinpro': ['DINpro', 'sans'],
        'dinproblack': ['DINproblack', 'sans'],
        'dinprobold': ['DINprobold', 'sans'],
      },
    },
  },
  plugins: [],
}
