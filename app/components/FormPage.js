var React = require('react');
var pageTitle = require('../styles').pageTitle

var FormPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1 style={pageTitle}>form</h1>
        <form>
          <div className="form-group">
            <input className="form-control" placeholder="placeholder" type="text" />
            <button type="submit" className="btn btn-block btn-success">submit</button>
          </div>
        </form>
      </div>

    )
  }
});

module.exports = FormPage;