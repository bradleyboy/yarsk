var karmaFactory = require('./make-karma-config.js');

module.exports = function(config) {
  config.set(karmaFactory({
    coverage: true,
    coverageReporters: [
      {type: 'text'},
    ],
  }));
};
