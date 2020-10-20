'use strict';

var express = require("express");
const stripe_config = require("../config/stripe_config");
var app=express();
var request = require('request');

const stripe=require('stripe')(stripe_config.stripe.stripe_secret_id);
app.use(express.json());

var fcmConstants = {
    fcmToken: "AAAAp6MxBuw:APA91bGPN7tawXBVuSLR3dBeC0zaQqgrGVmM4lLXO67afe5M_WhGfQI7WwSMmQYDZcaJNHpP1ZZQA3WLBZ9P7K",
    senderId: "103953800507",
    url: "https://fcm.googleapis.com/fcm/send"
  };

const _stripe = (req, res) => {

stripe.charges.create({
    amount:req.body.amount,
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



const _notification =  (req,res)=> {
    var headers = {
      "Authorization": 'key=' + fcmConstants.fcmToken,
      'Content-Type': 'application/json',
      'Sender': 'id=' + fcmConstants.senderId
    };
    var requestData = {
      registration_ids: regId,
      "priority": "high",
      "content_available": true,
      "notification": {
        "title": 'abn',
        "body": 'abc123',
                
      },
         
    };

    request.post({
      headers: headers,
      url: fcmConstants.url,
      body: JSON.stringify(requestData),
      method: 'POST'
    }, function (error, httpResponse, body) {
      cb(null, body);
      res.send(body);
    });
  };


module.exports = {
    _stripe,
    _notification

  };
  