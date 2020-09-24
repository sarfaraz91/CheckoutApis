'use strict';

var mongoose = require('mongoose'),
 Bills = mongoose.model('bills');
 bodyParser = require('body-parser');


// var express = require("express");
// var app = express();
// app.use(express.json());
// db = require("mongoose");
// var collection_name = "bills";
// var COLLECTION = db.model(collection_name);
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


const _bills=(req,res)=>{
    var new_task = new Bills(req.body);

    new_task.save(function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });

}


const _getBills = (req, res) => {
  Bills.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      res.status(400).send({
        code: 400,
        success: false,
        message: err ? err.message : "Internal Server Error",
      });
    });
};

module.exports = {
  _bills,
  _getBills,
};
