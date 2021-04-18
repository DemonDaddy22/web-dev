const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
});

userSchema.statics.findAndValidate = async function(username, password) {
    console.log(this);
    const user = await this.findOne({ username: username});
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : false;
}

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;