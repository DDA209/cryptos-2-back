const pluralize = require('pluralize');

const collections = ['wallet', 'platform', 'token', 'movement'];

module.exports = (app, configInfo) => {
	collections.map((collection) => {
		app.use(
			'/' + pluralize(collection),
			require('../controllers/' + collection + '.controller')
		);
	});

	// /* only for dev */
	// if (configInfo.logWrongUrl) {
	// 	console.info("Wrong routes're logged.");
	// 	/* Route to log wrong URLs */
	// 	app.use('/*', require('../controllers/core/notARoute'));
	// }
};
