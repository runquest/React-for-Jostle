var React = require('react');
var pageTitle = require('../styles').pageTitle
var jquery = require('jquery');
var Video = require('react-html5video');
var ReactPlayer = require('react-player');
var url = "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"

var VideoFrame = React.createClass({
  render () {
    return <ReactPlayer url='http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4' playing />
  }
});

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
      <div>
        <h1 style={pageTitle}>home</h1>
        <VideoFrame></VideoFrame>
      </div>
    );
  }
});

module.exports = Home;