import React from 'react/addons';
import Header from '../index.jsx';

describe('Header', function() {
  it('displays the title', function() {
    const TestUtils = React.addons.TestUtils;

    const header = TestUtils.renderIntoDocument(
      <Header />
    );

    const title = TestUtils.findRenderedDOMComponentWithClass(header, 'HeaderComponent-title');
    const dom = React.findDOMNode(title);

    expect(dom.textContent).to.equal('YARSK');
  });
});
