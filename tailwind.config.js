module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_3f": "#0000003f",
          "900_ce": "#000000ce",
        },
        gray: { 700: "#5d4f4f", "700_60": "#5d4f4f60" },
        blue_gray: { 100: "#d9d9d9", "100_54": "#d9d9d954" },
        orange: { 200: "#ffce99", "200_68": "#ffce9968" },
        white: {
          A700_96: "#fefefe96",
          A700_01: "#ffffff",
          A700_ef: "#ffffffef",
          A700_49: "#ffffff49",
          A700: "#fefefe",
        },
      },
      fontFamily: { almarai: "Almarai" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff,#fefefe96)",
        gradient1: "linear-gradient(135deg ,#d9d9d954,#ffffffef,#ffffff49)",
        gradient2:
          "linear-gradient(135deg ,#ffce99,#000000ce,#5d4f4f60,#ffce9968)",
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "0px 4px  7px 0px #0000007f",
        bs2: "0px -4px  7px 0px #0000007f",
      },
      textShadow: { ts: "0px 4px  5px #0000007f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
