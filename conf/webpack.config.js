var path = require('path');

module.exports = {
  entry: './app/index.jsx',
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions', 'sass-loader?indentedSyntax=sass'],
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
