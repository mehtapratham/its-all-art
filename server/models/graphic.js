const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const graphicSchema = new Schema({
    _id: String,
    props: {
        style: String,
        fillColor: String,
        strokeColor: String,
        top: Number,
        left: Number,
        width: Number,
        height: Number,
        radius: Number,
        points: [{x: Number, y: Number}],
        by: String
    }
});

module.exports = mongoose.model('graphic', graphicSchema);
