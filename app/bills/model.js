'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var  bills= new Schema({
    name: {
        type: String,
        index: true,
        trim: true,
        lowercase: true
    }
}, { timestamps: true });

mongoose.model('bills', bills);