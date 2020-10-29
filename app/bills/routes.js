'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();


router.route('/bills').post(ctrl._bills)
router.route('/getbills').get(ctrl._getBills)
router.route('/deleteBill/:id').delete(ctrl._deleteBills)
module.exports = router;
