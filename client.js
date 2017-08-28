import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes/routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;

import createSagaMiddleware from 'redux-saga';


import reducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

var store = createStore(reducer, window.PROPS, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>, document
);
