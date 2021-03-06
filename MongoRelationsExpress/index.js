const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Product = require('./models/product');
const Farm = require('./models/farm');

const app = express();
const categories = ['fruit', 'vegetable', 'dairy'];

mongoose.connect('mongodb://localhost:27017/farmStandNew', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('> Connection established...'))
    .catch(err => {
        console.error('> Connection failed');
        console.error(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3030, () => console.log('> Listing on Port 3030...'));

// FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

app.post('/farms', async (req, res) => {
    const { name, city, email } = req.body;
    const farm = new Farm({ name, city, email });
    await farm.save();
    res.redirect(`/farms/${farm._id}`);
});

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
});

// PRODUCT ROUTES
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
});

app.get('/farms/:farmid/products/new', async (req, res) => {
    const farmid = req.params.farmid;
    const farm = await Farm.findById(farmid);
    res.render('products/new', { categories, farm });
});

app.post('/farms/:farmid/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const farm = await Farm.findById(req.params.farmid);
    newProduct.farm = farm;
    farm.products.push(newProduct);
    await newProduct.save();
    await farm.save();
    res.redirect(`/farms/${req.params.farmid}`);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name');
    res.render('products/show', { product })
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
});

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
});