var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var mainContainerBg = require('../styles').mainContainerBg;
var footer = require('../styles').footer;
var button = require('../styles').button;
var menu = require('../styles').menu;

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container center' style={mainContainerBg}>
        {this.props.children}

        <div id="footer" style={footer}>
          <Link to='/'>
            <button type='button' className='btn btn-lg btn-success'>Video</button>
          </Link>
          <Link to='/list'>
            <button className='btn btn-lg btn-success'>List</button>
          </Link>
          <Link to='form'>
            <button className='btn btn-lg btn-success'>Form</button>
          </Link>
      </div>
      </div>
    )
  }
});

module.exports = Main;