const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: true }));

const readFile = file => fs.readFileSync(__dirname + '/' + file, { encoding: 'utf8' });
const writeToFile = (file, data) => fs.writeFile(__dirname + '/' + file, data, { encoding: 'utf8' }, err => {
    if (err) console.error(err);
    else console.log('File written successfully');
});

const FILE = 'data.json';

app.get('/posts', (req, res) => {
    let posts = readFile(FILE);
    res.status(200).send(JSON.parse(posts));
});

app.post('/posts', (req, res) => {
    const { content } = req.body;
    let posts = JSON.parse(readFile(FILE));

    const newPost = {
        id: posts.data[posts.data.length - 1].id + 1,
        content,
        upvotes: 0,
        downvotes: 0,
        comments: []
    };

    posts.data.push(newPost);
    writeToFile(FILE, JSON.stringify(posts));

    res.status(200).send({ data: newPost });
});

app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) res.status(400).send({
        data: `ID must be a valid number`
    });

    let posts = JSON.parse(readFile(FILE));

    const post = posts.data.filter(post => post.id === parseInt(id));

    if (!post.length) res.status(200).send({
        data: post
    });

    res.status(200).send({
        data: [post[0]]
    });
});

app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    if (isNaN(id)) res.status(400).send({
        data: `ID must be a valid number`
    });

    let posts = JSON.parse(readFile(FILE));

    const { content, upvotes, downvotes, comments } = req.body;
    const post = posts.data.filter(post => post.id === parseInt(id));

    if (!post.length) res.status(404).send({
        data: `No post found for id: ${id}`
    });

    const updatedPost = { 
        ...post[0],
        content: content || post[0].content,
        upvotes: upvotes || post[0].upvotes,
        downvotes: downvotes || post[0].downvotes,
        comments: comments || [...post[0].comments]
    };

    posts.data = posts.data.map(post => post.id === parseInt(id) ? updatedPost : post);
    writeToFile(FILE, JSON.stringify(posts));

    res.status(200).send({
        data: updatedPost
    });
});

app.listen(8080, (req, res) => console.log('> App started...'));