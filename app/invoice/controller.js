"use strict";

var mongoose = require("mongoose"),
  Invoice = mongoose.model("invoice");
  bodyParser = require("body-parser");


  const _invoice = (req, res) => {
    var new_task = new Invoice(req.body);
  
    new_task.save(function (err, task) {
      if (err) res.send(err);
      res.json(task);
    });
  };


  
const _getInvoice = (req, res) => {
var billId=req.params.billId

Invoice.aggregate([
    { $match: { billId: billId } },
    { $lookup:
        {
           from: "users",
           localField: "userId",
           foreignField: "email",
           as: "user"
        }
    },
    { $lookup:
        {
           from: "bills",
           localField: "billId",
           foreignField: "_id",
           as: "bill"
        }
    },
])
      .then((invoice) => res.status(200).send(invoice))
      .catch((err) => {
        res.status(400).send({
          code: 400,
          success: false,
          message: err ? err.message : "Internal Server Error",
        });
      });
  };

  module.exports = {
    _invoice,
    _getInvoice
  };
  