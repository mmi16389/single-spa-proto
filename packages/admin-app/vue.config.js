const path = require("path");
const webpack = require("webpack");

module.exports = {
  devServer: {
    writeToDisk: true,
  },
  configureWebpack: {
    entry: {
      app: "./src/main.ts",
    },
    output: {
      filename: "[name].js",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "dist"),
    },
  },
};
