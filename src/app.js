'use strict';

var express = require('express');
var app = express();

app.use('/', express.static('public'));

var router = express.Router();

app.use('/api', router);

router.get('/todos', function(req, res) {
  res.json({todos: []})
})

app.listen(3000, function(req, res) {
  console.log("The server is running on Port 3000!");
})
