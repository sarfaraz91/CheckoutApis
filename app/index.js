'use strict';
module.exports = (app) => {

	require('./bills/model');
	require('./users/model');
	app.use('/api', require('./strp'));
	app.use('/api', require('./bills'));
	app.use('/api', require('./users'));

}
