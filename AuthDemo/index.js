const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('./models/user');

mongoose
    .connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('> Connection established'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'authsecret' }));

app.get('/', (req, res) => {
    res.send('HOME PAGE');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hash });
    await user.save();
    req.session.userId = user._id;
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isAuthenticated = await bcrypt.compare(password, user.password);
    if (isAuthenticated) {
        req.session.userId = user._id;
        res.redirect('/secret');
    } else res.redirect('/login');
});

app.post('/logout', (req, res) => {
    req.session.userId = null;
    res.redirect('/login');
});

app.get('/secret', (req, res) => {
    if (!req.session.userId) res.redirect('/');
    else res.render('secret');
});

app.listen(3030, () => console.log('> Serving on PORT 3030...'));
