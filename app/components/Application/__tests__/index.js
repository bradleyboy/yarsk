import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Application from '../index.jsx';
import styles from '../style.sass';

describe('Application', function() {
  it('displays the component', function() {
    const application = ReactTestUtils.renderIntoDocument(
      <Application />
    );

    const divs = ReactTestUtils.scryRenderedDOMComponentsWithClass(application, styles.main);

    expect(divs.length).to.equal(1);
  });
});
