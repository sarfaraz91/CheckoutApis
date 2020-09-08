'use strict';
const ctrl = require('./controller'),
express = require('express'),
router = express.Router();


router.route('/stripe')
  .get(ctrl._stripe)


module.exports = router;
