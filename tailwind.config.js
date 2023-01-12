/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#C71F66",

          "secondary": "#DB6E9C",

          "accent": "#EBECEF",

          "neutral": "#FAFBFC",

          "base-100": "#FFFFFF",

          "info": "#86D5E9",

          "success": "#165A2F",

          "warning": "#F4D125",

          "error": "#EF2540",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}