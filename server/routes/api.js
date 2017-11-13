const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../../config/config');
const drawing = require('../models/drawing');

mongoose.Promise = global.Promise;
mongoose.connection.openUri(config.dbUrl, (err) => {
    if (err) {
        console.log('Error Connecting', err);
    }
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/all', (req, res) => {
    drawing.find({}).exec((err, drawings) => {
        if (err) {
            console.log(err);
        } else {
            console.log(drawings);
            res.json(drawings);
        }
    });
});

module.exports = router;
