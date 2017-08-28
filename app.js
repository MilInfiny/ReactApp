import http from 'http';
import mongoose from './services/mongoose';
import { env, mongo, port, ip } from './config';
const passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const express = require('express');
const app = express();
app.use(passport.initialize());
app.use(express.static('public'));
app.use(require('./routes'));
mongoose.connect(mongo.uri);
const server = http.createServer(app);
setImmediate(() => {
  // server.listen(port, ip, () => {
  server.listen(port, (env == 'production')?"0.0.0.0":ip, () => { // based on env (production or not..)
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  });
});

export default app;