var React = require('react');
var pageTitle = require('../styles').pageTitle

var List = React.createClass({
  render: function () {
    return (
      <h1 style={pageTitle}>list</h1>
    )
  }
});

module.exports = List;