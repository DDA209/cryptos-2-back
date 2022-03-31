module.exports = (app) => {
	app.use('/wallets', require('../controllers/wallet.controller'));
};
