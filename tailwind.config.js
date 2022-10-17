/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#da9b15",
        darkYellow: "#bd8715",
        red: "#9c0f11",
      },
      screens: {
        450: "450px",
        600: "600px",
        700: "700px",
        850: "850px",
        1200: "1200px",
        1400: "1400px",
        1500: "1500px",
      },
    },
  },
  plugins: [],
};
