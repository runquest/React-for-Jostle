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
      <div className='container center-align'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={1500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
          <div className='row' id="menu-footer">
            <Link to='/home' className="col s12 m4 hoverable" activeClassName="active"><p>Home</p></Link>
            <Link to='/list' className="col s12 m4 hoverable" activeClassName="active"><p>List</p></Link>
            <Link to='/form' className="col s12 m4 hoverable" activeClassName="active"><p>Form</p></Link>
          </div>
      </div>
    )
  }
});

module.exports = Main;