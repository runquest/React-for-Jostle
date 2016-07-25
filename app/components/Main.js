var React = require('react');
var ReactRouter = require('react-router');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var footer = require('../styles').footer;
var button = require('../styles').button;
var container = require('../styles').container;
var center = require('../styles').center;
var page = require('../styles').page

var Link = ReactRouter.Link
var Radium = require('radium');
var RadiumLink = Radium(Link);
require('../main.css');


var Main = React.createClass({
  render: function () {
    return (
      <div className='container center-align' style={container}>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
        <div className='row'>
          <div style={footer} className='valign-wrapper'>
              <RadiumLink to='/' style={button} className='valign menu'>Home</RadiumLink>
              <RadiumLink to='/list' style={button} className='valign'>List</RadiumLink>
              <RadiumLink to='/form' style={button} className='valign'>Form</RadiumLink>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;