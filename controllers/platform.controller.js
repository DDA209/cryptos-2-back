const express = require('express');
const router = express.Router();
const Model = require('../models/platform.model');

router.post('/platform', (req, res, next) => {
	console.log('platform.controller.js POST');
	console.log('platform.controller.js POST req.body', req.body);
	const { name, url } = req.body;

	const collection = new Model({
		name,
		url,
	});

	collection.save((error, document) => {
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
