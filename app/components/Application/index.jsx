import React from 'react';
import Header from '../Header';

/*
  Component specific stylesheet
  Can also use .less, .scss, or plain .css files here
*/
require('./style.sass');

export default class Application extends React.Component {
  render() {
    return <div className="ApplicationComponent">
      <div className="ApplicationComponent-wrap">
        <Header />

        <main className="ApplicationComponent-body">
          <p>Seems like creating your own React starter kit is a right of passage. So, here's mine.</p>
          <p>For more information, see the <a href="https://github.com/bradleyboy/yarsk#yarsk">Readme</a>.</p>
        </main>
      </div>
    </div>;
  }
}
