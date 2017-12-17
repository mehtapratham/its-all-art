const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    _id: String,
    msg: String,
    by: {type: Schema.Types.ObjectId, ref: 'user'},
    ts: {type: Date, default: Date.now},
    own: {type: Boolean, default: false}
});

module.exports = mongoose.model('message', messageSchema);
