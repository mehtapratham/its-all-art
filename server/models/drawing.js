const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drawingSchema = new Schema({
    title:String,
    _id: String,
    graphics: [{type: Schema.Types.ObjectId, ref: 'graphic'}],
    sharedWith: [{type: Schema.Types.ObjectId, ref: 'user'}],
    messages: [{type: Schema.Types.ObjectId, ref: 'message'}]
});

module.exports = mongoose.model('drawing', drawingSchema);
