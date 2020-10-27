'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();


router.route('/invoice').post(ctrl._invoice)
router.route('/getInvoice/:billId').get(ctrl._getInvoice)
module.exports = router;
