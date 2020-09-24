var express = require("express");
var app = express();
bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose=require('mongoose');
app.use(jsonParser);
require("./app")(app);
var db = require("./app/config/db_config");
var port = process.env.PORT || 3000; // set our port
var router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(db.mongodb.dburl);
mongoose.connection.on('connected',()=>{
    console.log('connected to db')
});

  // If the connection throws an error
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });
  
app.use(function onError(err, req, res, next) {
  res.status(500).send({ message: "Interval Server Error" });
});


app.listen(port);

console.log("server started at " + port);
