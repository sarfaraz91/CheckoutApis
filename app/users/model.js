'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _user = new Schema({
    username: {
        type: String,
        index: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        index: true,
        trim: true,
        lowercase: true
    },
    token: {
        type: String,
        index: true,
        trim: true,
        lowercase: true
    }
}, { timestamps: true });

mongoose.model('users', _user);