
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require("../components/Home");
var List = require("../components/List");
var FormPage = require("../components/FormPage");

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='list' component={List} />
      <Route path='form' component={FormPage} />
    </Route>
  </Router>
);

module.exports = routes;