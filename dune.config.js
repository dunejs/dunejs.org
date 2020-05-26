const Vuetify = require("vuetify");

module.exports = {
  srcDir: "./src/",
  head: {
    title: "Dune.js",
    titleTemplate: "%s | Dune.js App",
    meta: [
      {
        charset: "utf-8",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
    link: [],
  },
  css: ["./assets/roboto.css"],
  plugins: ["./plugins/vuetify.js"],
  options: {
    vuetify: new Vuetify(),
  },
};
