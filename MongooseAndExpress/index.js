const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/productApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('> Mongo connection established successfully'))
    .catch(err => {
        console.error('> Mongo connection failed');
        console.log(err);
    });

app.listen(3000, () => console.log('> Server started on port 3000'));