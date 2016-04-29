/* eslint-disable */
const path = require("path");
const webpack = require("webpack");

const PATHS = {
  images: path.join(__dirname, 'images')
};

module.exports = {
  devtool: "source-map",
  entry: [
    "webpack-hot-middleware/client",
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      loaders: ["style", "raw"],
      include: __dirname
    }, {
      test: /\.svg$/,
      loader: "url?limit=10000&mimetype=image/svg+xml",
      include: PATHS.images
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png",
      include: PATHS.images
    }, {
      test: /\.jpg$/,
      loader: "url-loader?mimetype=image/jpg",
      include: PATHS.images
    }]
  }
};
