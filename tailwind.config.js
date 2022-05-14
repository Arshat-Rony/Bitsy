module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Roboto Condensed', 'sans-serif'],
        secondary: ['Koulen', 'cursive']
      }
    },
  },
  daisyui: {
    themes: [{
      mytheme: {

        "primary": "#1A1E49",

        "secondary": "#212456",

        "accent": "#FA5C6D",

        "neutral": "#3D4451",
      },
    },],
  },
  plugins: [require("daisyui")],
}
// 