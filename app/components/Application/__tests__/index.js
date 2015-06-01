import React from 'react/addons';
import Application from '../index.jsx';
import styles from '../style.sass';

describe('Application', function() {
  it('displays the component', function() {
    const TestUtils = React.addons.TestUtils;

    const application = TestUtils.renderIntoDocument(
      <Application />
    );

    const divs = TestUtils.scryRenderedDOMComponentsWithClass(application, styles.main);

    expect(divs.length).to.equal(1);
  });
});
