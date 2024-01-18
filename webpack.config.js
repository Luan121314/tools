import path from "path";
import { execSync as exec } from "child_process";
import HtmlWebpackPlugin from "html-webpack-plugin";

const appsNames = exec(`ls ./apps/`, { encoding: "utf-8" }).toString();
const mainApp = { index: path.resolve("src", "index.js") };

const isDevelopmentMode = process.env.BUILDMODE == "DEV";

const entryPoints = appsNames.split("\n").reduce((acc, currentAppName) => {
  if (!currentAppName) return acc;

  const pathApp = {
    [currentAppName]: path.resolve("apps", currentAppName, "index.js"),
  };
  return { ...acc, ...pathApp };
}, mainApp);

export default {
  entry: entryPoints,
  devtool: isDevelopmentMode ? "source-map" : "eval",
  mode: isDevelopmentMode ? 'development': 'production',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("dist"),
    clean: true,
    publicPath: '/',

  },
  devServer: {
    historyApiFallback: true,
    port: 8081,
    host: '0.0.0.0',
    hot: true,
    // compress: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
