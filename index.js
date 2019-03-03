// var express  = require('express');
// var app      = express();
//
// app.get('/', function (req, res) {
//   res.status(200).send('Hello world!');
// });
//
// module.exports = app;

var express  = require('express');
var app      = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello world!');
});

var port = process.env.PORT || 80;

// app.listen(port, function () {
//   console.log('Server started on port', port);
// })

module.exports = app;