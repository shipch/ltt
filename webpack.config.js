var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve('./src/index.js'), // Absolute path
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'), // Absolute path
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Match *.js
        exclude: /node_modules/, // Dont transpile files in node_modules
        loader: 'babel-loader', // Use babel-loader to transpile
      },
    ]
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
  }),
],
devServer: {
  inline: true,
},
}
