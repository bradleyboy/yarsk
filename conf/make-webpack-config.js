var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(options) {
  options.lint = fs.existsSync(__dirname + '/../.eslintrc') && options.lint !== false;
  
  var cssLoaders = 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions';
  var sassLoaders = cssLoaders + '!sass-loader?indentedSyntax=sass';

  if (options.production) {
    cssLoaders = ExtractTextPlugin.extract('style-loader', cssLoaders.substr(cssLoaders.indexOf('!')));
    sassLoaders = ExtractTextPlugin.extract('style-loader', sassLoaders.substr(sassLoaders.indexOf('!')));
  }

  var jsLoaders = ['babel-loader'];

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
      preLoaders: options.lint ? [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        }
      ] : [],
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: jsLoaders,
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: options.production ? jsLoaders : ['react-hot-loader'].concat(jsLoaders),
        },
        {
          test: /\.css$/,
          loader: cssLoaders,
        },
        {
          test: /\.sass$/,
          loader: sassLoaders,
        },
        {
          test: /\.png$/,
          loader: "url-loader?limit=100000&mimetype=image/png",
        },
        {
          test: /\.svg$/,
          loader: "url-loader?limit=100000&mimetype=image/svg+xml",
        },
        {
          test: /\.gif$/,
          loader: "url-loader?limit=100000&mimetype=image/gif",
        },
        {
          test: /\.jpg$/,
          loader: "file-loader",
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
    plugins: options.production ? [
      // Important to keep React file size down
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
