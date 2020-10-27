"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var _invoice = new Schema(
  {
    userId: { type: String },
    billId: { type: String },
    // foodItem: [
    //   {
    //     item: String,
    //     price: Number,
    //   },
    // ],
    amount: {
      type: Number,
      index: true,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);

mongoose.model("invoice", _invoice);
