const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../../config/config');
const Drawing = require('../models/drawing');
const Users = require('../models/user');
const Graphics = require('../models/graphic');
const Messages = require('../models/message');
const _ = require('lodash');

mongoose.Promise = global.Promise;
mongoose.connection.openUri(config.dbUrl, (err) => {
    if (err) {
        console.log('Error Connecting', err);
    }
});

router.get('/messages/:id/:user', (req, res) => {
    let id = req.params.id;
    let userId = req.params.user;
    Drawing.findById(id)
        .populate('messages')
        .exec((err, drawing) => {
            if(err) {
                res.status(400).send(err);
            } else {
                res.json(drawing.messages);
            }
        });
});

router.post('/send/message', (req, res) => {
    let id = req.body.docId;
    let userId = req.body.userId;
    let msg = req.body.msg;
    let msgId = new mongoose.Types.ObjectId();
    Messages.create(
        {
            _id: msgId,
            msg: msg,
            by: userId
        },
        (err, msg) => {
            if(err){
                res.status(400).send(err);
            } else {
                Drawing.findById(id).exec((err, drawing) => {
                    if(err){
                        res.status(400).send(err);
                    } else {
                        drawing.messages.push(msg);
                        drawing.save();
                    }
                })
                res.sendStatus(200);
            }
        }
    );
});

router.post('/add/graphic/', (req, res) => {
    let graphic = req.body;
    let docId = graphic.docId;
    graphic = _.omit(graphic, 'docId');
    graphic._id = new mongoose.Types.ObjectId();

    Graphics.create(
        graphic,
        (err, doc) => {
            if (err) {
                res.status(400).send(err);
            } else {
                Drawing.findById(docId).exec((err, drawing) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        drawing.graphics.push(doc);
                        drawing.save();
                    }
                });
                res.sendStatus(200);
            }
        }
    );
});

router.post('/new', (req, res) => {
    let drawing = req.body;
    let userId = drawing.id;
    drawing = _.omit(drawing, 'id');
    drawing._id = new mongoose.Types.ObjectId();
    Drawing.create(
        drawing,
        (err, doc) => {
            if (err) {
                res.status(400).send(err);
            } else {
                Users.findById(userId).exec((err, user) => {
                    if (err) {
                        res.status(400).send(err);
                    } else {
                        user.drawings.push(doc);
                        user.save();

                        doc.sharedWith.push(user);
                        doc.save();
                    }
                });
                res.sendStatus(200);
            }
        }
    );
});

router.get('/:_id/all/graphics', (req, res) => {
    let drawingId = req.params._id;
    Drawing.findById(drawingId)
        .populate('graphics')
        .exec((err, drawing) => {
            if (err) {
                res.status(400).send(err);
            } else {
                res.json(drawing.graphics.map(item => item.props));
            }
        })
});

router.get('/:_id/all', (req, res) => {
    Users.findById(req.params._id)
        .populate('drawings')
        .exec((err, user) => {
            if (err) {
                console.log(err);
            } else {
                res.json(user.drawings);
            }
        });
});

router.get('/:_id/shared-with-me', (req, res) => {
    Users.findById(req.params._id)
        .populate('sharedWithMe')
        .exec((err, user) => {
            if (err) {
                console.log(err);
            } else {
                res.json(user.sharedWithMe);
            }
        });
});

router.get('/', (req, res) => {
  Drawing.find({}).exec((err, drawings) => {
    if(err){
        console.log(err);
    }
    console.log(drawings);
  })
  res.send('api works');
});

module.exports = router;
