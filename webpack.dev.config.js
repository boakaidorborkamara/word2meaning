const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "dist",
    filename: "bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  mode: "development",
};
