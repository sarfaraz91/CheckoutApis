'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var _bills = new Schema({

    // foodItem : { type : Array ,lowercase: true, "default" : [] },
    foodItem : [{
        item : String,
        price : Number
         }],
    amount: {
        type: Number,
        index: true,
        trim: true,
        lowercase: true
    },
}, { timestamps: true });

mongoose.model('bills', _bills);
