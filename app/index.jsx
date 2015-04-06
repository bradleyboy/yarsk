// IMPORTANT: This needs to be first (before any other components)
// to get around CSS order randomness in webpack.
require('./css/base.sass');

import React from 'react';
import Application from './components/Application';

React.render(<Application />, document.getElementById('app'));
