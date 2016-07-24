var React = require('react');
var pageTitle = require('../styles').pageTitle

var Home = React.createClass({
  render: function () {
    return (
      <h1 style={pageTitle}>video</h1>
    )
  }
});

module.exports = Home;