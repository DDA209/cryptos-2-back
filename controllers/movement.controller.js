const express = require('express');
const router = express.Router();
const Model = require('../models/movement.model');
const PlatformModel = require('../models/platform.model');
const TokenModel = require('../models/token.model');

router.post('/movement', (req, res, next) => {
	console.log('movement.controller.js POST');
	console.log('movement.controller.js POST req.body', req.body);
	// const { platform, tokens } = req.body;

	// const collection = new Model({
	// 	platform,
	//     tokens
	// });

	// collection.save((error, document) => {
	// 	if (error) {
	// 		return res.json({
	// 			success: false,
	// 			data: error,
	// 		});
	// 	}

	// 	res.json({
	// 		success: true,
	// 		data: document,
	// 	});
	// });
});

module.exports = router;
