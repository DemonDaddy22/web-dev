const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Product = require('./models/product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('> Mongo connection established successfully'))
    .catch(err => {
        console.error('> Mongo connection failed');
        console.log(err);
    });

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products', { products });
});

app.get('/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render('product', { product });
});

app.listen(3000, () => console.log('> Server started on port 3000'));