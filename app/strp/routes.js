'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();


router.route('/stripe').post(ctrl._stripe)

module.exports = router;
