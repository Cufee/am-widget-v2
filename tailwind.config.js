module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        neutral: "#082032",
        "neutral-content": "white",

        "base-dark": "#2C394B",
        "base-dark-content": "white",

        "base-light": "#334756",
        "base-light-content": "white",

        primary: "#FF4C29",
        "primary-content": "white",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
