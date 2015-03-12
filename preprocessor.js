// Use babel to do both the ES6 and JSX transforms
var babel = require('babel-core');

// Strip stylesheet requires (webpack style-loader) from tests
var styleSheetRegex = /require\('.*\.(css|s(a|c)ss)'\);/;

var appDir = process.cwd() + '/app';

module.exports = {
  process: function(src, path) {
    // Only run Babel on userland stuff
    if (path.indexOf(appDir) === 0 && /.jsx?$/.test(path)) {
      return babel.transform(src.replace(styleSheetRegex, '')).code;
    }

    return src;
  }
};
