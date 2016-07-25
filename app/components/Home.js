var React = require('react');
var ReactPlayer = require('react-player');

var jquery = require('jquery');
require('../main.css');

/*
* Video props:
* url, playing, loop, controls, volume, width, height, className(pass in a className to set on the top level element), progressFrequency.
*
* Callback props:
* onProgress, onDuration, onStart, onPlay, onPause, onBuffer, onEnded, onError
*
*/

var Home = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    jquery.ajax({
      url: 'http://jsonplaceholder.typicode.com/posts/1',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('url', status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div data={this.state.data} className="row">
        <h1 className="col s12">{this.state.data.title}</h1>
        <p className="col s12">{this.state.data.body}</p>
        <ReactPlayer className="col s12" width="100%" url='http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'/>
      </div>
    );
  }
});

module.exports = Home;