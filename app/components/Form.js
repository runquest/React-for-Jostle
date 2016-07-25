var React = require('react');
require('../main.css');

var Form = React.createClass({
  getInitialState: function() {
    //we are only saving the emailAddress as an example
    //of how to save data changes for final submission
    return {
      emailAddress: ""
    };
  },
  handleSubmit: function(e) {
    //we don't want the form to submit, so we prevent the defaul behavior
    e.preventDefault();
    var emailAddress = this.state.emailAddress.trim();
    if (!emailAddress) {
      return;
    }
    
    //Here we do the final submit to the parent component
    this.props.onFormSubmit({emailAddress: emailAddress});
  },
  validateEmail: function (value) {
    // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  },
  commonValidate: function () {
    //you could do something here that does general validation for any form field
    return true;
  },
  setEmailAddress: function (event) {
    //If the emailAddress input field were directly within this
    //this component, we could use this.refs.emailAddress.value
    //Instead, we want to save the data for when the form is submitted
    this.setState({
      emailAddress: event.target.value
    });
  },
  render: function() {
    //Each form field is actually another component.
    return (
      <div class='row'>
        <h1>Form</h1>
        <ul><li>Field cannot be empty (required).</li><li>Field has to be at least 6 characters long.</li><li>Email validation through regex.</li></ul>
          <form className='card row form-card' onSubmit={this.handleSubmit}>
          
            <TextInput
              uniqueName="email"
              text="Aiste"
              required={true}
              minCharacters={6}
              validate={this.validateEmail}
              onChange={this.handleEmailInput} 
              errorMessage="Email is invalid"
              emptyMessage="Email is required"
              class='emailTextEmail'
                />
       
            <input type="submit" className='btn col s12 j-button' value="Submit" />
          </form>
      </div>
    );
  }
});

var TextInput = React.createClass({
  getInitialState: function(){
    //most of these variables have to do with handling errors
    return {
      isEmpty: true,
      value: null,
      valid: false,
      errorMessage: "Input is invalid",
      errorVisible: false
    };
  },
 
  handleChange: function(event){
    //validate the field locally
    this.validation(event.target.value);
 
    //Call onChange method on the parent component for updating it's state
    //If saving this field for final form submission, it gets passed
    // up to the top component for sending to the server
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  },
 
  validation: function (value, valid) {
    //The valid variable is optional, and true if not passed in:
    if (typeof valid === 'undefined') {
      valid = true;
    }
    
    var message = "";
    var errorVisible = false;
    
    //we know how to validate text fields based on information passed through props
    if (!valid) {
      //This happens when the user leaves the field, but it is not valid
      //(we do final validation in the parent component, then pass the result
      //here for display)
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    else if (this.props.required && jQuery.isEmptyObject(value)) {
      //this happens when we have a required field with no text entered
      //in this case, we want the "emptyMessage" error message
      message = this.props.emptyMessage;
      valid = false;
      errorVisible = true;
    }
    else if (value.length < this.props.minCharacters) {
      //This happens when the text entered is not the required length,
      //in which case we show the regular error message
      message = this.props.errorMessage;
      valid = false;
      errorVisible = true;
    }
    
    //setting the state will update the display,
    //causing the error message to display if there is one.
    this.setState({
      value: value,
      isEmpty: jQuery.isEmptyObject(value),
      valid: valid,
      errorMessage: message,
      errorVisible: errorVisible
    });
 
  },
 
  handleBlur: function (event) {
    //Complete final validation from parent element when complete
    var valid = this.props.validate(event.target.value);
    //pass the result to the local validation element for displaying the error
    this.validation(event.target.value, valid);
  },
  render: function() {
    
    return (
      <div className={this.props.uniqueName}>
        <input
          placeholder={this.props.text}
          className={'input input-' + this.props.uniqueName}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          value={this.state.value} />
      
        <InputError 
          visible={this.state.errorVisible} 
          errorMessage={this.state.errorMessage} />
      </div>
    );
  }
});

var InputError = React.createClass({
  getInitialState: function() {
    return {
      message: 'Input is invalid'
    };
  },
  render: function(){
 
    return (
      <div>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
 
});

module.exports = Form;
