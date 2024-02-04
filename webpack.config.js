const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopmentMode = process.env.NODE_ENV == "development";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  devtool: isDevelopmentMode ? "source-map" : "eval",
  mode: isDevelopmentMode ? "development" : "production",
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    port: 8081,
    host: "0.0.0.0",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
