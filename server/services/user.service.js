const config = require('../../config/config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Q = require('q');
const mongoose = require('mongoose');
const Users = require('../models/user');

const authenticate = (username, password) => {
    let deferred = Q.defer();

    Users.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: jwt.sign({ sub: user._id }, config.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

const getAll = () => {
    let deferred = Q.defer();

    Users.find({}).exec((err, users) => {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = users.map((user) => {
            let userCopy = {};
            Object.keys(user).map((key) => {
                if (key !== 'password') {
                    userCopy[key] = user[key];
                }
            });
            return userCopy;
        });
        deferred.resolve(users);
    });

    return deferred.promise;
}

const getById = (_id) => {
    let deferred = Q.defer();

    Users.findById(_id, (err, user) => {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(Object.keys(user).reduce((obj, key) => {
              // if (key !== 'hash') {
              //   return { ...obj, [key]: user[key] }
              // }
              return obj
            }, {}));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

const create = (userParam) => {
    let deferred = Q.defer();

    // validation
    Users.findOne(
        { username: userParam.username },
        (err, user) => {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

    let createUser = () => {
        // set user object to userParam without the cleartext password
        let user = {};
        Object.keys(userParam).map((key) => {
            if (key !== 'password') {
                user[key] = userParam[key];
            }
        });

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);
        user._id = new mongoose.mongo.ObjectId();
        Users.create(
            user,
            (err, doc) => {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

// function update(_id, userParam) {
//     let deferred = Q.defer();

//     // validation
//     Users.findById(_id, function (err, user) {
//         if (err) deferred.reject(err.name + ': ' + err.message);

//         if (user.username !== userParam.username) {
//             // username has changed so check if the new username is already taken
//             Users.findOne(
//                 { username: userParam.username },
//                 function (err, user) {
//                     if (err) deferred.reject(err.name + ': ' + err.message);

//                     if (user) {
//                         // username already exists
//                         deferred.reject('Username "' + req.body.username + '" is already taken')
//                     } else {
//                         updateUser();
//                     }
//                 });
//         } else {
//             updateUser();
//         }
//     });

//     function updateUser() {
//         // fields to update
//         let set = {
//             firstName: userParam.firstName,
//             lastName: userParam.lastName,
//             username: userParam.username,
//         };

//         // update password if it was entered
//         if (userParam.password) {
//             set.hash = bcrypt.hashSync(userParam.password, 10);
//         }

//         Users.update(
//             { _id: mongo.helper.toObjectID(_id) },
//             { $set: set },
//             function (err, doc) {
//                 if (err) deferred.reject(err.name + ': ' + err.message);

//                 deferred.resolve();
//             });
//     }

//     return deferred.promise;
// }

// function _delete(_id) {
//     let deferred = Q.defer();

//     Users.remove(
//         { _id: mongo.helper.toObjectID(_id) },
//         function (err) {
//             if (err) deferred.reject(err.name + ': ' + err.message);

//             deferred.resolve();
//         });

//     return deferred.promise;
// }

const service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
// service.update = update;
// service.delete = _delete;

module.exports = service;
