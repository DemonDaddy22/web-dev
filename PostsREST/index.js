const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));

const readFile = file => fs.readFileSync(__dirname + '/' + file, { encoding: 'utf8' });

app.get('/posts', (req, res) => {
    let posts = readFile('data.json');
    res.status(200).send(JSON.parse(posts));
});

app.post('/posts', (req, res) => {
    const { content } = req.body;

    const newPost = {
        id: data.data[data.data.length - 1].id + 1,
        content,
        upvotes: 0,
        downvotes: 0,
        comments: []
    };

    data.data.push(newPost);

    res.status(200).send({ data: newPost });
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

app.put('/posts/:id', (req, res) => {
    const { id } = req.params;

    const { content, upvotes, downvotes, comments } = req.body;
    const post = data.data.filter(post => post.id === parseInt(id));

    if (!post.length) res.status(404).send({
        data: `No post found for id: ${id}`
    });

    const updatedPost = { id: post.id, content, upvotes, downvotes, comments };

    data.data = data.data.map(post => post.id === parseInt(id) ? updatedPost : post);

    res.status(200).send({
        data: updatedPost
    });
});

app.listen(8080, (req, res) => console.log('> App started...'));