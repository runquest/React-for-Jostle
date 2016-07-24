var React = require('react');
var pageTitle = require('../styles').pageTitle

var ListItem = React.createClass({

  render: function () {
    var names = ['Jake', 'Jon', 'Thruster'];
    var namesList = names.map(function(name, index){

      return <li key={ index }>{name}</li>;
    })
    return  <ul>{ namesList }</ul>
  }
});

var List = React.createClass({

  render: function () {
    return (
      <div>
        <h1 style={pageTitle}>List</h1>
        <ListItem></ListItem>
      </div>
    );
  }
});






module.exports = List;
