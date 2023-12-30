const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
});
module.exports = {
  pluginOptions: {
    element: {
      customElements: [
        { tag: 'lord-icon' },
      ],
    },
  },
};