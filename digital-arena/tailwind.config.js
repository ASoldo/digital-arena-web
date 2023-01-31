module.exports = {
  content: ["./src/**/*.{vue,js,ts}"],
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      colors: {
        "logo-color": "#7dc244",
        "light-logo-color": "#a4ff59",
        "extra-light-logo-color": "#c2fa93",
        "ultra-light-logo-color": "#e2ffc9",
      },
    },
  },
};
