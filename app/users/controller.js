
var mongoose = require('mongoose'),
Users = mongoose.model('users');

const _users=(req,res)=>{
  var new_task = new Users(req.body);

  new_task.save(function(err, task) {
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

module.exports = {
  _users,
  _getUsers,
};