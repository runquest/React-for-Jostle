var React = require('react');
var footer = require('../styles').footer;
var button = require('../styles').button;
var container = require('../styles').container;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container' style={container}>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
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