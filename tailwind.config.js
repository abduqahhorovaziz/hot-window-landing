/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "header-custom": "0px 22px 44px rgba(0, 90, 233, 0.15)",
        "element-shadow":
          "0px 1px 8px rgba(0, 90, 233, 0.33), inset 0px 0px 9px rgba(255, 255, 255, 0.76)",
        "button-shadow": "0px 22px 44px -12px #005AE9",
        "sales-shadow": "0px 13px 27px rgba(0, 0, 0, 0.25)",
        "paginate-shadow": "0px 22px 44px -12px rgba(255, 57, 57, 0.69)",
        "services-shadow": "0px -5px 34px rgba(21, 103, 233, 0.19)",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      uni: ["UniSans"],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
  ],
};
