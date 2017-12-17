const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    hash: String,
    drawings: [{type: Schema.Types.ObjectId, ref: 'drawing'}],
    sharedWithMe: [{type: Schema.Types.ObjectId, ref: 'drawing'}]
});

module.exports = mongoose.model('user', userSchema);
