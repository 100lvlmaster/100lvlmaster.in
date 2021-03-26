const {
  convertCompilerOptionsFromJson,
  collapseTextChangeRangesAcrossMultipleVersions,
} = require("typescript");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    // fill: (theme) => ({
    //   red: theme("colors.red.500"),
    //   green: theme("colors.green.500"),
    //   blue: theme("colors.blue.500"),
    // }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
