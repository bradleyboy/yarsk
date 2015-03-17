import React from 'react';

require('./style.sass');

export default class Application extends React.Component {
  render() {
    return <div className="Application">
      <h1>YARSK</h1>
      <h2>(<strong>Y</strong>et <strong>A</strong>nother <strong>R</strong>eact <strong>S</strong>tarter <strong>K</strong>it)</h2>

      <main>
        <p>Seems like creating your own React starter kit is a right of passage. So, here's mine.</p>
        <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
      </main>
    </div>;
  }
}
