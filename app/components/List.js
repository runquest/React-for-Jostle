var React = require('react');
var ReactDOM = require('react-dom');
var List = require('react-dynamic-list');
var Modal = require('react-modal');
var jquery = require('jquery');
require('../main.css');

var Image = React.createClass({
  render: function () {
    var msg = this.props.url.title;
    return <img src={this.props.url.url} onClick={()=>{this.popup(msg)}} className='listImage'></img>
  },
  popup: function(e) {
       alert(e);
    },
});

var Content = React.createClass({
  render: function (){
    return <div>{this.props.content}</div>
  }
});

var ListItem = React.createClass({
  render: function() {

    return <li><div id='listComponent'>
         <Image url={this.props.data} />
         <Content content={this.props.data.title} />
       </div></li>;
  }
});

var ListItems = React.createClass({
  render: function() {
    var results = this.props.list;
    return (
      <ul>
        {results.map(function(result) {
           return <ListItem key={result.id} data={result}/>;
        })}
      </ul>
    );
  }
});

var List = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  componentDidMount: function() {
    jquery.ajax({
      url: 'http://jsonplaceholder.typicode.com/photos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.slice(1, 10)});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('url', status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div>
         <h1>List</h1>
         <ListItems list={this.state.data}/>
       </div>
    );
  }
});

module.exports = List;

