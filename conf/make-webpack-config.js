var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function extractForProduction(loaders) {
  return ExtractTextPlugin.extract('style', loaders.substr(loaders.indexOf('!')));
}

module.exports = function(options) {
  options.lint = fs.existsSync(path.resolve(__dirname, '..', '.eslintrc')) && options.lint !== false;

  var localIdentName = options.production ? '[hash:base64]' : '[path]-[local]-[hash:base64:5]';
  var cssLoaders = 'style!css?module&localIdentName=' + localIdentName + '!postcss?browsers=last 2 versions';
  var scssLoaders = cssLoaders + '!sass';
  var sassLoaders = scssLoaders + '?indentedSyntax=sass';
  var lessLoaders = cssLoaders + '!less';

  if (options.production) {
    cssLoaders = extractForProduction(cssLoaders);
    sassLoaders = extractForProduction(sassLoaders);
    scssLoaders = extractForProduction(scssLoaders);
    lessLoaders = extractForProduction(lessLoaders);
  }

  return {
    entry: options.production ? './app/index.js' : [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './app/index.js',
    ],
    debug: !options.production,
    devtool: options.devtool,
    output: {
      path: options.production ? './dist' : './build',
      publicPath: options.production ? '' : 'http://localhost:8080/',
      filename: options.production ? 'app.[hash].js' : 'app.js',
    },
    module: {
      preLoaders: options.lint ? [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint',
        },
      ] : [],
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel'],
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
          test: /\.scss$/,
          loader: scssLoaders,
        },
        {
          test: /\.less$/,
          loader: lessLoaders,
        },
        {
          test: /\.png$/,
          loader: 'url?limit=100000&mimetype=image/png',
        },
        {
          test: /\.svg$/,
          loader: 'url?limit=100000&mimetype=image/svg+xml',
        },
        {
          test: /\.gif$/,
          loader: 'url?limit=100000&mimetype=image/gif',
        },
        {
          test: /\.jpg$/,
          loader: 'file',
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.sass', '.scss', '.less', '.css'],
    },
    plugins: options.production ? [
      // Important to keep React file size down
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new ExtractTextPlugin('app.[hash].css'),
      new HtmlWebpackPlugin({
        template: './conf/tmpl.html',
        production: true,
      }),
    ] : [
      new HtmlWebpackPlugin({
        template: './conf/tmpl.html',
      }),
    ],
    postcss: [autoprefixer],
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  };
};
