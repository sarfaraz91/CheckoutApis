'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();


router.route('/stripe').post(ctrl._stripe)
router.route('/noti').post(ctrl._notification)

module.exports = router;
