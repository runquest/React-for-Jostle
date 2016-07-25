var React = require('react');
var ReactDOM = require('react-dom');
var List = require('react-dynamic-list');
var Modal = require('react-modal');
var pageTitle = require('../styles').pageTitle
var customStyle = require('../styles').customStyle
var page = require('../styles').page
var listImage = require('../styles').listImage
var jquery = require('jquery');

var Image = React.createClass({
  render: function () {
    return <img src={this.props.url} onClick={this.popup} className='listImage'></img>
  },
  popup: function() {
       alert('hello');
    },
});

var Button = React.createClass({
  getInitialState: function() {
   return {isShowingModal: false};
  },
  handleClick: function() {
    this.setState({isShowingModal: true});
  },
  handleClose: function() {
    this.setState({isShowingModal: false});
  },
  render: function() {
    return <a onClick={this.handleClick}>
      <span>Button Text</span>
      {
        this.state.isShowingModal &&
        <ModalA onClose={this.handleClose}/>
      }
    </a>;
  }
});

var ModalA = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleModalCloseRequest: function() {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({modalIsOpen: false});
  },

  handleInputChange: function() {
    this.setState({foo: 'bar'});
  },

  handleOnAfterOpenModal: function() {
    // when ready, we can access the available refs.
    this.refs.title.style.color = '#F00';
  },

  render: function() {
    return (     
      <div>
        <Modal
          isOpen={this.state.openModal}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          closeTimeoutMS={150}
          style={customStyle}>
          <h1>Modal Content</h1>
          <p>Etc.</p>
        </Modal>
      </div>
      )
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
        <Button />
         <h1>List</h1>
         <ListItems list={this.state.data}/>
       </div>
    );
  }
});

module.exports = List;

