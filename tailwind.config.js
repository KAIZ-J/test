/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // all HTML files in the root folder
    "./src/**/*.{js,ts,jsx,tsx}"  // all JS/TS files inside src folder and subfolders
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
