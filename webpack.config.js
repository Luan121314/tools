const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { execSync: exec } = require("child_process");

const isDevelopmentMode = process.env.NODE_ENV == "development";

const appsNameFiles = exec(`ls ${path.resolve(__dirname, "apps")}` , {encoding: 'utf8'}).toString()
const appNames = appsNameFiles.split("\n").reduce((acc, currentNameApp)=>{
  if(!currentNameApp) return acc

  return [...acc, path.resolve(__dirname, "apps", currentNameApp,"index.tsx")]
},  [])


module.exports = {
  entry: {
    bundle: [
      path.resolve(__dirname, "src", "index.tsx"),
      ...appNames
    ]
  },
  devtool: isDevelopmentMode ? "source-map" : "eval",
  mode: isDevelopmentMode ? "development" : "production",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
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
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
