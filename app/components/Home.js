var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var indexBg = require('../styles').indexBg;
var footer = require('../styles').footer;
var button = require('../styles').button;

function Home () {
  return (
    <div className="jumbotron col-sm-12 center" style={indexBg}>
      <h1>Github Battle</h1>
      <p className='lead'>What even is a jQuery?</p>
    </div>
  )
}

module.exports = Home;