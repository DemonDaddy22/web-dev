const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('> Mongo connection established successfully'))
    .catch(err => {
        console.error('> Mongo connection failed');
        console.log(err);
    });

const seedProducts = [
    {
        name: 'Avacado',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Celery',
        price: 1.49,
        category: 'vegetable'
    },
    {
        name: 'Feta Cheese',
        price: 4.99,
        category: 'dairy'
    },
    {
        name: 'Lamb chops',
        price: 9.99,
        category: 'protein'
    }
];

Product.insertMany(seedProducts)
    .then(data => console.log(data))
    .catch(err => console.log(err));