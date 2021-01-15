"use strict";

var express = require('express');

var fs = require('fs');

var app = express();
app.use(express.urlencoded({
  extended: true
}));

var readFile = function readFile(file) {
  return fs.readFileSync(__dirname + '/' + file, {
    encoding: 'utf8'
  });
};

app.get('/posts', function (req, res) {
  var posts = readFile('data.json');
  res.status(200).send(JSON.parse(posts));
});
app.post('/posts', function (req, res) {
  var content = req.body.content;
  var newPost = {
    id: data.data[data.data.length - 1].id + 1,
    content: content,
    upvotes: 0,
    downvotes: 0,
    comments: []
  };
  data.data.push(newPost);
  res.status(200).send({
    data: newPost
  });
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
app.put('/posts/:id', function (req, res) {
  var id = req.params.id;
  var _req$body = req.body,
      content = _req$body.content,
      upvotes = _req$body.upvotes,
      downvotes = _req$body.downvotes,
      comments = _req$body.comments;
  var post = data.data.filter(function (post) {
    return post.id === parseInt(id);
  });
  if (!post.length) res.status(404).send({
    data: "No post found for id: ".concat(id)
  });
  var updatedPost = {
    id: post.id,
    content: content,
    upvotes: upvotes,
    downvotes: downvotes,
    comments: comments
  };
  data.data = data.data.map(function (post) {
    return post.id === parseInt(id) ? updatedPost : post;
  });
  res.status(200).send({
    data: updatedPost
  });
});
app.listen(8080, function (req, res) {
  return console.log('> App started...');
});