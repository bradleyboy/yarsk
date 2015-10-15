import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Header from '../index.jsx';
import styles from '../style.sass';

describe('Header', function() {
  it('displays the title', function() {
    const header = ReactTestUtils.renderIntoDocument(
      <Header />
    );

    const title = ReactTestUtils.findRenderedDOMComponentWithClass(header, styles.title);
    const dom = ReactDOM.findDOMNode(title);

    expect(dom.textContent).to.equal('YARSK');
  });
});
