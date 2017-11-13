const express = require('express');
const router = express.Router();
const _ = require('lodash');
const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('../models/user');
const mongoose = require('mongoose');

router.post('/authenticate', (req, res) => {

    Users.findOne({ username: req.body.username }).exec((err, user) => {
        if (err) {
            res.status(400).send(err.name + ': ' + err.message);
        }

        if (user && bcrypt.compareSync(req.body.password, user.hash)) {
            // authentication successful
            global.Promise.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: jwt.sign({ sub: user._id }, config.secret)
            }).then((user) => {
                res.send(user);
            });
        } else {
            // authentication failed
            res.status(400).send('Username or password is incorrect');
        }
    });
});

router.post('/register', (req, res) => {
    let userParam = req.body;
    // validation
    Users.findOne(
        { username: userParam.username },
        (err, user) => {
            if (err) {
                res.status(400).send(err);
            }

            if (user) {
                // username already exists
                res.status(400).send('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

    let createUser = () => {
        // set user object to userParam without the cleartext password
        let user = _.omit(userParam, 'password');

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);
        user._id = new mongoose.mongo.ObjectId();
        Users.create(
            user,
            (err, doc) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.sendStatus(200);
                }
            });
    }
});

router.get('/', (req, res) => {
    Users.find({}).exec((err, users) => {
        if (err) {
            res.status(400).send(err.name + ': ' + err.message);
        }

        // return users (without hashed passwords)
        users = users.map((user) => {
            return {
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
            };
        });
        res.send(users);
    });
});

router.get('/current', (req, res) => {

    Users.findById(req.user.sub, (err, user) => {
        if (err) {
            res.status(400).send(err.name + ': ' + err.message);
        }

        if (user) {
            // return user (without hashed password)
            res.send({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
            });
        } else {
            // user not found
            res.sendStatus(404);
        }
    });
});

router.put('/:_id', (req, res) => {
    let _id = req.params._id;
    let userParam = req.body;
    // validation
    Users.findById(_id, function (err, user) {
        if (err) {
            res.status(400).send(err.name + ': ' + err.message);
        }

        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            Users.findOne(
                { username: userParam.username },
                (err, user) => {
                    if (err) {
                        res.status(400).send(err.name + ': ' + err.message);
                    }
                    if (user) {
                        // username already exists
                        res.status(400).send('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    let updateUser = () => {
        // fields to update
        let set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        Users.update(
            { _id: mongoose.Types.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) {
                    res.status(400).send(err.name + ': ' + err.message);
                }
                else {
                    res.sendStatus(200);
                }

            });
    }
});

router.delete('/:_id', (req, res) => {
    Users.remove(
        { _id: mongoose.Types.ObjectId(req.params._id) },
        (err) => {
            if (err) {
                res.status(400).send(err.name + ': ' + err.message);
            }
            else {
                res.sendStatus(200);
            }
        });
});

module.exports = router;
