var Path = require('path');
var browserify = require('browserify-middleware');
var express = require('express');
var app = express();

app.get('/app-bundle.js',
  browserify('./main.js'));

app.use(express.static('./public'));

var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);