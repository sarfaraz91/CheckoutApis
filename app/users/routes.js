'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();

router.route('/users').post(ctrl._users)
router.route('/sendNotification').post(ctrl._notification)
router.route('/getusers').get(ctrl._getUsers)
router.route('/updateFCM').post(ctrl._updateFCM)

module.exports = router;