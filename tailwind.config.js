// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const colors = require("tailwindcss/colors");

// eslint-disable-next-line no-undef
module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
