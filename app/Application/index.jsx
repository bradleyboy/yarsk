import React from 'react';

/*
  Can also use .less, .scss, or plain .css files here
*/
require('./style.sass');

/*
  Reference an image and get back a URL automatically via webpack.
  webpack takes care of versioning, bundling for production, etc.
*/
const logoURL = require('./images/react-logo.svg');

export default class Application extends React.Component {
  render() {
    return <div className="Application">
      <header>
        <img src={logoURL} height="125" />

        <div className="Application--header-wrap">
          <h1>YARSK</h1>
          <h2>(<strong>Y</strong>et <strong>A</strong>nother <strong>R</strong>eact <strong>S</strong>tarter <strong>K</strong>it)</h2>
        </div>
      </header>

      <main>
        <p>Seems like creating your own React starter kit is a right of passage. So, here's mine.</p>
        <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
      </main>
    </div>;
  }
}
