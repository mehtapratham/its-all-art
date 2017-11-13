const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drawingSchema = new Schema({
    title:String
});

module.exports = mongoose.model('drawing', drawingSchema);
