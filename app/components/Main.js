var React = require('react');
var footer = require('../styles').footer;
var button = require('../styles').button;
var container = require('../styles').container;
var center = require('../styles').center;
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
          <div className='row'>
            <div style={center}>
              <div class="col-xs-12 col-sm-4">
                {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
              </div>
            </div>
          </div>
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