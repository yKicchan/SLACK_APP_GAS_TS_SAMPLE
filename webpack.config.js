/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const GasPlugin = require("gas-webpack-plugin");
const Es3ifyPlugin = require("es3ify-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  context: __dirname,
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        enforce: "pre",
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  plugins: [new GasPlugin(), new Es3ifyPlugin()],
};
