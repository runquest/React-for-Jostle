var React = require('react');
var footer = require('../styles').footer;
var button = require('../styles').button;
var container = require('../styles').container;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container' style={container}>
        {this.props.children}
        <div style={footer}>
            <button style={button}>
              <Link to='/'>Home</Link>
            </button>
            <button style={button}>
              <Link to='/list'>List</Link>
            </button>
            <button style={button}>
              <Link to='/form'>Form</Link>
            </button>
        </div>
      </div>
    )
  }
});

module.exports = Main;