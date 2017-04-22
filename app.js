var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var path = require('path');
var logger = require('morgan');
var routes = require('./routes/index');
var users = require('./routes/users');
var passport = require('passport');
var session = require('express-session')


var app = express();

var sess = {
    secret: 'keyboard cat',
    cookie: {},
    resave: false,
    saveUninitialized: false
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}


app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send(err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send(err.message);
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

module.exports = app;
