'use strict';

var express = require("express");
const stripe_config = require("../config/stripe_config");
var app=express();
var mongoose = require('mongoose'),

Users = mongoose.model('users');

var FCM = require('fcm-node');
var serverKey = 'AAAAYb8wGQo:APA91bGYMxIy97vJjlKp_-uGQPjYbiiyhZUC9vPUD8ZjuGc0CEKm0rBvBLA2y7eKnPfG-fKhzDZ0PqKnsb40aQxJTt3Ey0hSslCzfxClq1Q0GnP2rynzxATBXIK-T0ImaKFPoJCFdfbh'; //put your server key here
var fcm = new FCM(serverKey);

const stripe=require('stripe')(stripe_config.stripe.stripe_secret_id);
app.use(express.json());

var fcmConstants = {
    fcmToken: "cbjs9wMfQw6pWLxulH1uPa:APA91bH3p7bPpQwPJta_95j_EcxXrBf7mcJqOYlY9qHxXXWnZ_4-QQsv4go-BiUPyGpO85Uf2moh2ZqwnNjUesSZuh08ASwtY1kmC-gGrRUCJA5qXZbDf-G6kAMwWk5I30YTcuC1I2Og",
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



const _notification=(req,res)=>{
  // var ids = ['5f6d2cb9db1609001784ca8f', '5f6d3329db1609001784ca90'];
var userIds=req.body.userIds;
console.log(userIds);
  Users.find({email: {$in: userIds}}).then((users)=>{
    users.forEach((items)=>{
      console.log(items);
      notify(items.token);
    })
    
  })
  .catch((err) => {
    res.status(400).send({
      code: 400,
      success: false,
      message: err ? err.message : "Internal Server Error",
    });
  });

}

var notify= (token)=>{
  var jsonToken=JSON.stringify(token);
  console.log(jsonToken);
var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
  to: "cbjs9wMfQw6pWLxulH1uPa:APA91bH3p7bPpQwPJta_95j_EcxXrBf7mcJqOYlY9qHxXXWnZ_4-QQsv4go-BiUPyGpO85Uf2moh2ZqwnNjUesSZuh08ASwtY1kmC-gGrRUCJA5qXZbDf-G6kAMwWk5I30YTcuC1I2Og", 
  
  notification: {
      title: 'Title of your push notification', 
      body: 'Body of your push notification' 
  },
  
  data: {  //you can send only notification or only data(or include both)
      my_key: 'my value',
      my_another_key: 'my another value'
  }
};
fcm.send(message, function(err, response){
if (err) {
    console.log("Something has gone wrong!");
} else {
    console.log("Successfully sent with response: ", response);
}
});
}

// var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
//   to: 'cbjs9wMfQw6pWLxulH1uPa:APA91bH3p7bPpQwPJta_95j_EcxXrBf7mcJqOYlY9qHxXXWnZ_4-QQsv4go-BiUPyGpO85Uf2moh2ZqwnNjUesSZuh08ASwtY1kmC-gGrRUCJA5qXZbDf-G6kAMwWk5I30YTcuC1I2Og', 
  
//   notification: {
//       title: 'Title of your push notification', 
//       body: 'Body of your push notification' 
//   },
  
//   data: {  //you can send only notification or only data(or include both)
//       my_key: 'my value',
//       my_another_key: 'my another value'
//   }
// };
// fcm.send(message, function(err, response){
// if (err) {
//     console.log("Something has gone wrong!");
// } else {
//     console.log("Successfully sent with response: ", response);
// }
// });

module.exports = {
    _stripe,
    _notification

  };
  