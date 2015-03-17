describe('Application', function() {
  it('displays the header', function() {
    var React = require('react/addons');
    var Application = require('../index.jsx');
    var TestUtils = React.addons.TestUtils;

    var application = TestUtils.renderIntoDocument(
      <Application />
    );

    var label = TestUtils.findRenderedDOMComponentWithTag(application, 'h1');
    var labelDOM = React.findDOMNode(label);

    expect(labelDOM.textContent).to.equal('YARSK');
  });
});
