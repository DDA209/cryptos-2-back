const express = require('express');
const router = express.Router();
const WalletModel = require('../models/wallet.model');

router.post('/wallet', (req, res, next) => {
	console.log('wallet.controller.js POST');
	console.log('wallet.controller.js POST req.body', req.body);
	const { name, url } = req.body;

	const wallet = new WalletModel({
		name,
		url,
	});

	wallet.save((error, document) => {
		if (error) {
			return res.json({
				success: false,
				data: error,
			});
		}

		res.json({
			success: true,
			data: document,
		});
	});
});

module.exports = router;
