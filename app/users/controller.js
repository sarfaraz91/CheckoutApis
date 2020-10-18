
var mongoose = require('mongoose'),
  Users = mongoose.model('users');



const _users=(req,res)=>{
  var new_task = new Users(req.body);

  new_task.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

}

const _getUsers = (req, res) => {
  Users.find()
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
  Users.find({ email: { $in: arr } }).then((usr) => {

    // var fcmConstants = {
    //   fcmToken: "AAAAp6MxBuw:APA91bGPN7tawXBVuSLR3dBeC0zaQqgrGVmM4lLXO67afe5M_WhGfQI7WwSMmQYDZcaJNHpP1ZZQA3WLBZ9P7K",
    //   senderId: "103953800507",
    //   url: "https://fcm.googleapis.com/fcm/send"
    // };
     usr.forEach(element => { 
     element.fcmToken
        });

//     res.status(200).send(usr)
//  =
  });
};

module.exports = {
  _users,
  _getUsers,
  _notification,
};
