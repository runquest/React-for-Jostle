var React = require('react');
var pageTitle = require('../styles').pageTitle
var Btn = require('../styles').Btn
var Input = require('../styles').Input
require('../main.css');

var FormPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1 style={pageTitle}>form</h1>
        <form>
          <div className="form-group">
            <input className="form-control" style={Input} placeholder="placeholder" type="text" />
            <button type="submit" style={Btn}>submit</button>
          </div>
        </form>
      </div>

    )
  }
});

module.exports = FormPage;