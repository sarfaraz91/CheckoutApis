var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser);
require('./app')(app);
var port = process.env.PORT || 3000; // set our port

var router = express.Router();

app.use(function onError(err, req, res, next) {
    res.status(500).send({ message: "Interval Server Error" })
});


   app.listen( port );
   
   console.log('server started at ' + port);