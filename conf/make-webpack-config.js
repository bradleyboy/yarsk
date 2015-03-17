var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(options) {
  var cssLoaders = 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions';
  var sassLoaders = cssLoaders + '!sass-loader?indentedSyntax=sass';

  return {
    entry: './app/index.jsx',
    debug: !options.production,
    devtool: options.devtool,
    output: {
      path: options.production ? './dist' : './build',
      publicPath: '',
      filename: options.production ? 'app.[hash].js' : 'app.js',
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
          loaders: options.production ? ['babel-loader'] : ['react-hot-loader', 'babel-loader'],
        },
        {
          test: /\.css$/,
          loader: options.production ? ExtractTextPlugin.extract('style-loader', cssLoaders.substr(cssLoaders.indexOf('!'))) : cssLoaders,
        },
        {
          test: /\.sass$/,
          loader: options.production ? ExtractTextPlugin.extract('style-loader', sassLoaders.substr(sassLoaders.indexOf('!'))) : sassLoaders,
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    plugins: options.production ? [
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        }
      }),
      new ExtractTextPlugin("app.[hash].css"),
      new HtmlWebpackPlugin({
        template: './conf/tmpl.html'
      }),
    ] : []
  };
};
