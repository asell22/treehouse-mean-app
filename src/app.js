'use strict';

var express = require('express');
var app = express();
var router = require('./api');

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(3000, function(req, res) {
  console.log("The server is running on Port 3000!");
})
