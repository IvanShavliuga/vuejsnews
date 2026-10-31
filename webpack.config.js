const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
      },
      {
        test: /\.m?js$/, // покрывает и .js, и .mjs
        exclude: /node_modules\/(?!vue-router)/, // важно: разрешить обработку vue-router
        use: {
          loader: "babel-loader", // или ts-loader, если у вас TypeScript
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
    resolve: {
      extensions: [".mjs", ".js", ".vue"], // порядок важен: .mjs раньше .js
    },
  },
};
