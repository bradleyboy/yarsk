// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
require('./css/base.sass');

// Some ES6+ features require the babel polyfill
// More info here: https://babeljs.io/docs/usage/polyfill/
// Uncomment the following line to enable the polyfill
// require("babel/polyfill");

import React from 'react';
import Application from './components/Application';

React.render(<Application />, document.getElementById('app'));
