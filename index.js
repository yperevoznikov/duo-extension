// var express  = require('express');
// var app      = express();
//
// app.get('/', function (req, res) {
//   res.status(200).send('Hello world!');
// });
//
// module.exports = app;

var express  = require('express');
// var app      = express();
var app = express.Router()

app.get('/', function (req, res) {
  res.status(200).send('Hello world!');
});

// app.listen(port, function () {
//   console.log('Server started on port', port);
// })

module.exports = app;