var express = require("express");
const { Collection } = require("mongoose");
var app = express();
app.use(express.json());
db = require("mongoose");

var collection_name = "users";
var COLLECTION = db.model(collection_name);

const _users = (req, res) => {
  var user = {
    username: req.username,
    email: req.email,
    registryToken: req.token,
  };
  var data = new Collection(user);
  data.insertOne((err, success) => {
    if (err) {
      console.log(err);
    } else {
      console.log(success);
    }
  });
};

const _getUsers = (req, res) => {
  COLLECTION.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      res.status(400).send({
        code: 400,
        success: false,
        message: err ? err.message : "Internal Server Error",
      });
    });
};

const _notification = (req, res) => {
  var arr = req.body.email;
  var total_amount = req.body.amount;
  var amount_dist = total_amount / (arr.length + 1);

  COLLECTION.find({ email: { $in: arr } }).then((res) => {
    


  });
};

module.exports = {
  _users,
  _getUsers,
  _notification,
};
