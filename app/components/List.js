var React = require('react');
var ReactDOM = require('react-dom');
var List = require('react-dynamic-list');
var Modal = require('react-modal');
var pageTitle = require('../styles').pageTitle
var page = require('../styles').page
var listImage = require('../styles').listImage
var jquery = require('jquery');

var Image = React.createClass({
  render: function () {
    return <img src={this.props.url} onClick={this.popup} className='listImage'></img>
  },
  popup(){
    console.log('yo')
    return 
      <div>
        <Modal>
          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
  
  
  }
});

var Content = React.createClass({
  render: function (){
    return <div>{this.props.content}</div>
  }
});

var ListItem = React.createClass({
  render: function() {

    return <li><div id='listComponent'>
         <Image url={this.props.data.thumbnailUrl} />
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

