var React = require('react');
var ReactDOM = require('react-dom');
var List = require('react-dynamic-list');
var pageTitle = require('../styles').pageTitle

var LIST_DATA = {
  items: [{title: 'First title', imageUrl: 'http://goo.gl/WBmFsz'}, {title: 'Second title', imageUrl: 'http://goo.gl/WBmFsz'}, {title: 'Third title', imageUrl: 'http://goo.gl/WBmFsz'}]
}

var Image = React.createClass({
  render: function () {
    return <img src='http://facebook.github.io/react/img/logo_og.png'></img>
  }
});

var Content = React.createClass({
  render: function (){
    return <div>hello</div>
  }
});

var ListItem = React.createClass({
  render: function() {
    console.log(this);
    return <li><div>
         <h1> {this.props.data.title} </h1>
         <Image />
         <Content />
       </div></li>;
  }
});

var ListItems = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.list.items.map(function(result) {
           return <ListItem key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});

var List = React.createClass({
  render: function() {
    return (
      <ListItems list={LIST_DATA} />
    );
  }
});


module.exports = List;

