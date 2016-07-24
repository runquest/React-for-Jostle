var React = require('react');
var pageTitle = require('../styles').pageTitle

var FormPage = React.createClass({
  render: function () {
    return (
      <h1 style={pageTitle}>form</h1>
    )
  }
});

module.exports = FormPage;