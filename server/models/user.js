const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    hash: String,
});

module.exports = mongoose.model('user', userSchema);
