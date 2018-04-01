 var express = require('express');
var path = require('path');
var http = require('http');
 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs=require('fs');
var querystring=require('querystring');


var test=require('./server/test');

var app = express();


 
app.post('/api',test);
//

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

console.log("111111");

app.use('^/api', test);
//post 方法


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;