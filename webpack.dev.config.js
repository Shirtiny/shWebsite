const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src/index.js"),
  },
  output: {
    filename: "boundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, "node_modules"),
        use: ["babel-loader"],
      },
      {
        //以.css结尾的文件
        test: /\.css$/,
        //从右到左执行 对css文件先用cssloader 然后用styleloader
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(htm|html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(ttf|woff2|woff|eot|svg|jpg|jpeg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    host: "localhost",
    port: "4000",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"],
    enforceExtension: false,
  },
  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
};
