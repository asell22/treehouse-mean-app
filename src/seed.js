'use strict';

var Todo = require('./models/todo');

var todos = [
  'Do Dishes',
  'Put Clothes Away',
  'Kitty Litter'
];

todos.forEach(function(todo, index) {
  Todo.find({'name': todo}, function(err, todos) {
    if (!err && !todos.length) {
      Todo.create({completed: false, name: todo});
    }
  });
});
