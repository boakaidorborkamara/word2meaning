const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './src/scripts/index.js',
    output: {
      publicPath: "dist",
      filename: 'bundle.js',
      clean: true
    },

    plugins: [
      new HtmlWebpackPlugin({
          template: './index.html',
          filename: 'index.html'
      })
    ],

    module: {
      rules: [
          { test: /\.css$/, use: ['style-loader','css-loader'] }
      ]
    },

    devtool: 'inline-source-map',

    devServer: {
      static: {
          directory: path.resolve(__dirname, 'dist'),
      },
      port: 8080,
      host: 'localhost',
      hot: true,
      open: true
    },
    
    mode: "development"
};