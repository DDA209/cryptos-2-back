const pluralize = require('pluralize');

const routesCollections = ['wallet', 'platform', 'token', 'movement', 'rate'];
// const routesUtilities = ['update-cryptos', 'update-rates']

module.exports = (app, configInfo) => {
	routesCollections.map((collection) => {
		app.use(
			'/' + pluralize(collection),
			require('../controllers/' + collection + '.controller')
		);
		// routesUtilities.map((utility) => {
		// 	app.use(
		// 		'/'+utility,
		// 		require('../controllers/' + utility + '.controller')
		// 	);
	});

	// /* only for dev */
	// if (configInfo.logWrongUrl) {
	// 	console.info("Wrong routes're logged.");
	// 	/* Route to log wrong URLs */
	// 	app.use('/*', require('../controllers/core/notARoute'));
	// }
};
