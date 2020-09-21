'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();


router.route('/bills').post(ctrl._bills)
router.route('/getbills').get(ctrl._getBills)
module.exports = router;
