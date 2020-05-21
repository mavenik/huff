const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelOptions = {
  "presets": [
    ["@babel/env", {
      "targets": { "browsers": ["last 2 chrome versions"] },
      "useBuiltIns": "entry",
      "corejs": 3
    }],
    "@babel/react"
  ]
}
module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'src', 'components', 'App.js')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: babelOptions
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          /* inline if smaller than 10 KB, otherwise load as a file */
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      { 
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ]
}
