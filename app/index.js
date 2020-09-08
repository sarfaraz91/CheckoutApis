'use strict';
module.exports = (app) => {

    // // Load Models
    // require('./roles/model');
    // require('./users/model');
    // require('./faqs/model');
    // require('./feedback/model');
    // require('./activities/model');
    // require('./userAccomplishments/model');
    // require('./ranks/model');
    // require('./skiShops/model');
    // require('./boats/model');
    // require('./skiBrands/model');
    // require('./boatDealers/model');
    // require('./lakes/model');
    // require('./equipment_types/model');
    // require('./sports/model');
	// require('./disciplines/model');
	// require('./age_group/model');
	// require('./governing_body/model');
	// require('./event/model');

	app.use('/api', require('./strp'));
	// app.use('/api', require('./age_group'));
    // app.use('/api', require('./roles'));
    // app.use('/api', require('./users'));
    // app.use('/api', require('./faqs'));
    // app.use('/api', require('./feedback'));
    // app.use('/api', require('./activities'));
    // // app.use('/api', require('./userAccomplishments'));
    // app.use('/api', require('./ranks'));
    // app.use('/api', require('./file'));
    // app.use('/api', require('./skiShops'));
    // app.use('/api', require('./boats'));
    // app.use('/api', require('./skiBrands'));
    // app.use('/api', require('./boatDealers'));
    // app.use('/api', require('./lakes'));
    // app.use('/api', require('./equipment_types'));
    // app.use('/api', require('./sports'));
    // app.use('/api', require('./disciplines'));
    // app.use('/api', require('./event'));


}
