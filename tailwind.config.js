/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#101010",
        customOrange: "#D87D4A",
        customOrangeLight: "#fbaf85",
        customGray: "#F1F1F1",
        customGrayLight: "#FAFAFA",
      },
      height: {
        headerDesktop: "729px",
      },
      width: {
        customWidth: "1110px",
      },
      borderWidth: {
        px1: "1px",
      },
    },
  },
  plugins: [],
};
