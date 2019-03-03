var express  = require('express');
var app      = express();

app.get('/', function (req, res) {
  var view = 'Hello world!';

  res.header("Content-Type", 'text/html');
  res.status(200).send(view);
});

module.exports = app;