'use strict';
module.exports = (app) => {

	require('./bills/model');
	app.use('/api', require('./strp'));
	app.use('/api', require('./bills'));

}
