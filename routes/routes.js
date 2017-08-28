var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

import Layout from '../view/Layout';
import Index from '../view/Index';
import Dashboard from '../view/Dashboard'
import Client_info from '../view/Client_info'

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
             <Route path='/dashboard' component={Dashboard}/>
             <Route path='/client_info' component={Client_info}/>             
        </Route>
    </Router>
);
