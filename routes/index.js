var router = require('express').Router();
import ReactDOM from 'react-dom';
import React from 'react';
import { browserHistory } from 'react-router';
import ReactDOMServer from 'react-dom/server';
var ReactRouter = require('react-router');
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducer from '../reducer';
import mySaga from '../sagas';
const passport = require('passport');
import api from '../api';
var session = require('express-session');
var cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { errorHandler as queryErrorHandler } from 'querymen';
import { errorHandler as bodyErrorHandler } from 'bodymen';
import { env } from '../config';


if (env === 'production' || env === 'development') {
  router.use(cors())
  router.use(compression())
  router.use(morgan('dev'))
}
var sess = {
  secret: 'keyboard cat',
  cookie: {}
}
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
router.use('/api', api)
router.use(queryErrorHandler())
router.use(bodyErrorHandler())



router.get('*',function(request, response) {
 
  var initialState = {
    title: 'Instance'  }

  const sagaMiddleware = createSagaMiddleware();
  var store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

  ReactRouter.match({
    routes: require('./routes.js'),
    location: request.url
  }, function(error, redirectLocation, renderProps) {

    if (renderProps) {
      sagaMiddleware.run(mySaga).done.then(() => {
        var html = ReactDOMServer.renderToString(
          <Provider store={store}>
            <ReactRouter.RouterContext {...renderProps} />
          </Provider>
        );
        response.send(html);
      })
      ReactDOMServer.renderToString(
        <Provider store={store}>
          <ReactRouter.RouterContext {...renderProps} />
        </Provider>
      );
      store.dispatch(END);
    } else {
      response.status(404).send('Not Found');
    }
  });
});

module.exports = router;
