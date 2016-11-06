var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Dev Server Started');
});