const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data.json');

const app = express();

app.get('/posts', (req, res) => {
    res.status(200).send(data);
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    
    const post = data.data.filter(post => post.id === parseInt(id));

    if (!post.length) res.status(200).send({
        data: post
    });

    res.status(200).send({
        data: [post[0]]
    });
});

app.listen(8080, (req, res) => console.log('> App started...'));