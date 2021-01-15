"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var data = require('./data.json');

var app = express();
app.get('/posts', function (req, res) {
  res.status(200).send(data);
});
app.get('/posts/:id', function (req, res) {
  var id = req.params.id;
  var post = data.data.filter(function (post) {
    return post.id === parseInt(id);
  });
  if (!post.length) res.status(200).send({
    data: post
  });
  res.status(200).send({
    data: [post[0]]
  });
});
app.listen(8080, function (req, res) {
  return console.log('> App started...');
});