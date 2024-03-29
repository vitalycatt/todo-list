module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        xl: [
          "0 14px 28px rgb(100 100 100 / 10%)",
          "0 10px 10px rgb(100 100 100 / 5%)",
        ],
      },
    },
  },
  plugins: [],
};
