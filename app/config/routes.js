var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var List = require("../components/List");
var Form = require("../components/Form");

var PromptContainer = require('../containers/PromptContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='list' header='List' component={List} />
      <Route path='form' header='Form' component={Form} />
    </Route>
  </Router>
);

module.exports = routes;