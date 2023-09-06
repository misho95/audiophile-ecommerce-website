/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#191919",
        customOrange: "#D87D4A",
        customOrangeLight: "#fbaf85",
        customDarkGray: "#4C4C4C",
        customGray: "#F1F1F1",
        customGrayLight: "#FAFAFA",
      },
      height: {
        headerDesktop: "729px",
        h720: "720px",
        h600: "600px",
        h560: "560px",
        h493: "493px",
        h284: "284px",
        h217: "217px",
      },
      width: {
        customWidth: "1110px",
        customTabletWidth: "770",
        px350: "350px",
        w223: "223px",
      },
      borderWidth: {
        px1: "1px",
      },
    },
  },
  plugins: [],
};
