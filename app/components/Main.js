var React = require('react');
var ReactRouter = require('react-router');

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Link = ReactRouter.Link
var Radium = require('radium');
var RadiumLink = Radium(Link);
require('../main.css');


var Main = React.createClass({
  render: function () {
    return (
      <div className='container center-align' class='container'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
        <div className='row'>
          <div id='menu-footer'>
              <RadiumLink to='/' className='four column j-button'>Home</RadiumLink>
              <RadiumLink to='/list' className='four column j-button'>List</RadiumLink>
              <RadiumLink to='/form' className='four column j-button'>Form</RadiumLink>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main;