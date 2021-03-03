const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection established successfully'))
    .catch(err => {
        console.log('Connection refused');
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String]
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: 749 });
bike.save()
    .then(data => console.log(data))
    .catch(err => console.log(err));