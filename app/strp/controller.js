'use strict';

var express = require("express");
const stripe_config = require("../config/stripe_config");
var app=express();
const stripe=require('stripe')(stripe_config.stripe.stripe_secret_id);
app.use(express.json());


const _stripe = (req, res) => {

    console.log(req.body);

stripe.charges.create({
    amount:2,
    source:req.body.token,
    currency:'usd'
}).then(function(){
    res.json({message:'Payment Succeded'})
}).catch(function(){
    res.json({
        status:500,
        message:'Payment Failed'})
})

}

module.exports = {
    _stripe,

  };
  