var React = require('react');
var pageTitle = require('../styles').pageTitle
var jquery = require('jquery');

var Home = React.createClass({
  componentDidMount: function() {
    jquery.ajax({
      url: 'http://jsonplaceholder.typicode.com/posts/1',
      dataType: 'json',
      cache: false,
      success: function(data) {
        // this.setState({data: data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('url', status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
      <h1 style={pageTitle}>home</h1>
    )
  }
});

module.exports = Home;