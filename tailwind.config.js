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
        h654: "654px",
        h600: "600px",
        h592: "592px",
        h588: "588px",
        h560: "560px",
        h493: "493px",
        h368: "368px",
        h365: "365px",
        h295: "295px",
        h284: "284px",
        h217: "217px",
        h174: "174px",
      },
      width: {
        customWidth: "1110px",
        customTabletWidth: "770",
        w635: "635px",
        w540: "540px",
        w445: "445px",
        w395: "335px",
        px350: "350px",
        w327: "327px",
        w223: "223px",
        w120: "120px",
      },
      borderWidth: {
        px1: "1px",
      },
      backgroundImage: {
        header_bg_mobile: "url('./assets/home/mobile/image-header.jpg')",
        header_bg_tablet: "url('./assets/home/tablet/image-header.jpg')",
        header_bg_desktop: "url('./assets/home/desktop/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
