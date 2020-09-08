var express = require("express");
var app = express();
var router = express.Router();

var port = process.env.PORT || 3000; // set our port
require('./app')(app);

// router.use(function (req, res, next) {
//     // do logging
//     console.log("\n================================================================================");
//     console.log("HOST", req.headers.host);
//     console.log("Remote Address", req.headers['x-forwarded-for'] || req.connection.remoteAddress);
//     console.log("URL", req.originalUrl);
//     console.log("BODY", req.body);
//     console.log("Params", req.params);
//     console.log("Query", req.query);
//     console.log("================================================================================ \n");
//     next();
// });
app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.status(500).send({ message: "Interval Server Error" })
});



// app.get("/url", (req, res, next) => {
//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    });


   app.listen( port );
   console.log('Magic happens on port ' + port);