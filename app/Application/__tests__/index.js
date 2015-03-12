jest.dontMock('../index.jsx');
jest.dontMock('../style.sass');

describe('Application', function() {
  it('displays "Hello, World!"', function() {
    var React = require('react/addons');
    var Application = require('../index.jsx');
    var TestUtils = React.addons.TestUtils;

    var application = TestUtils.renderIntoDocument(
      <Application />
    );

    var label = TestUtils.findRenderedDOMComponentWithTag(application, 'h1');

    expect(label.getDOMNode().textContent).toEqual('Hello, World!');
  });
});
