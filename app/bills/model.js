'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _bills = new Schema({
    foodItem: {
        type: String,
        index: true,
        trim: true,
        lowercase: true
    },
    amount: {
        type: Number,
        index: true,
        trim: true,
        lowercase: true
    },
}, { timestamps: true });

mongoose.model('bills', _bills);
