const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FarmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email must be provided!']
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Farm = mongoose.model('Farm', FarmSchema);

module.exports = Farm;