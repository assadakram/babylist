module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    letterSpacing: {
      widest: '0.3em',
     },
    extend: {
      fontFamily: {
        Josefin: "Josefin Sans, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
