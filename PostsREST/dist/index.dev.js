"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var writeToFile = function writeToFile(file, data) {
  return fs.writeFile(__dirname + '/' + file, data, {
    encoding: 'utf8'
  }, function (err) {
    if (err) console.error(err);else console.log('File written successfully');
  });
};

var FILE = 'data.json';
app.get('/posts', function (req, res) {
  var posts = readFile(FILE);
  res.status(200).send(JSON.parse(posts));
});
app.post('/posts', function (req, res) {
  var content = req.body.content;
  var posts = JSON.parse(readFile(FILE));
  var newPost = {
    id: posts.data[posts.data.length - 1].id + 1,
    content: content,
    upvotes: 0,
    downvotes: 0,
    comments: []
  };
  posts.data.push(newPost);
  writeToFile(FILE, JSON.stringify(posts));
  res.status(200).send({
    data: newPost
  });
});
app.get('/posts/:id', function (req, res) {
  var id = req.params.id;
  if (isNaN(id)) res.status(400).send({
    data: "ID must be a valid number"
  });
  var posts = JSON.parse(readFile(FILE));
  var post = posts.data.filter(function (post) {
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
  if (isNaN(id)) res.status(400).send({
    data: "ID must be a valid number"
  });
  var posts = JSON.parse(readFile(FILE));
  var _req$body = req.body,
      content = _req$body.content,
      upvotes = _req$body.upvotes,
      downvotes = _req$body.downvotes,
      comments = _req$body.comments;
  var post = posts.data.filter(function (post) {
    return post.id === parseInt(id);
  });
  if (!post.length) res.status(404).send({
    data: "No post found for id: ".concat(id)
  });

  var updatedPost = _objectSpread({}, post[0], {
    content: content || post[0].content,
    upvotes: upvotes || post[0].upvotes,
    downvotes: downvotes || post[0].downvotes,
    comments: comments ? JSON.parse(comments) : _toConsumableArray(post[0].comments)
  });

  posts.data = posts.data.map(function (post) {
    return post.id === parseInt(id) ? updatedPost : post;
  });
  writeToFile(FILE, JSON.stringify(posts));
  res.status(200).send({
    data: updatedPost
  });
});
app["delete"]('/posts/:id', function (req, res) {
  var id = req.params.id;
  if (isNaN(id)) res.status(400).send({
    data: "ID must be a valid number"
  });
  var posts = JSON.parse(readFile(FILE));
  posts.data = posts.data.filter(function (post) {
    return post.id !== parseInt(id);
  });
  writeToFile(FILE, JSON.stringify(posts));
  res.sendStatus(200);
});
app.listen(8080, function (req, res) {
  return console.log('> App started...');
});