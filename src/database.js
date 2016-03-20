'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err) {
  if (err) {
    console.log('Failed connectiong to MongoDb');
  } else {
    console.log('Successfully connected to mongoDb');
  }
});
