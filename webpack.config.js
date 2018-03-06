const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sass)$/,
        use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: './client',
    compress: true,
    port: 1184,
    proxy: {
      "/api": {
        target: "https://api.mcmakler.de/v1/advertisements",
        secure: false
      }
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }

  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
