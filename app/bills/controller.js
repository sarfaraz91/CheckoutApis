var express = require("express");
const { Collection } = require("mongoose");
var app = express();
app.use(express.json());

var collection_name='bills'
var COLLECTION = db.model(collection_name);

const _bills = (req, res) => {

    var items={
        foodItem:req.foodItem,
        amount:req.amount
    }
  var data = new Collection(items);
  data.insertOne((err,success)=>{
    if (err) {
        console.log(err)
    } else {
        console.log(success)
    }
  })
};

const _getBills = (req, res) => {

   

    COLLECTION.find().then((users) => res.status(200).send(users))
    .catch((err) => {
        res.status(400).send({
            code: 400,
            success: false,
            message: err ? err.message : "Internal Server Error"
        })
    })
};


module.exports = {
  _bills,
  _getBills
};
