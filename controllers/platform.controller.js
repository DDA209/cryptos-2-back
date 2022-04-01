const express = require('express');
const router = express.Router();
const Model = require('../models/platform.model');
const createPopulationTree = require('../utils/createPopulationTree');
const checkDocumentsDatas = require('../utils/checkDocumentsDatas');

const here = 'platform';

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

router.delete('/platform', (req, res, next) => {
	console.log('platform.controller.js DELETE');
	console.log('platform.controller.js DELETE req.body', req.body);
});

router.get('/plateform', (req, res, next) => {
	console.log('platform.controller.js GET 1');
	console.log('platform.controller.js GET 1req.body', req.body);
});

router.get('/', (req, res, next) => {
	console.log('platform.controller.js GET all');
	console.log('platform.controller.js GET all req.body', req.body);
	const arrPopulation = createPopulationTree(Model);
	const skip = 0;
	const limit = false;

	Model.find({}, [], { skip, limit, sort: { creationDateTime: -1 } })
		.populate(arrPopulation)
		.exec((err, documents) => {
			const theError = checkDocumentsDatas(err, documents, here);
			if (theError) {
				const success = false;
				const data = theError.toString();
				const response = { success, data };
				console.log('#getAllDocuments error', response);
				return res.json(response);
			} else if (documents.length < 1) {
				const success = false;
				const data = 'no document found';
				const response = { success, data };
				console.log('#getAllDocuments no document', response);
				return res.json(response);
				/* end errors check */
			} else {
				const data = documents; //.filter((documents) => {
				//	return !documents.isDeleted;
				//});

				console.log(
					`${here}'s document${
						documents.length > 1 ? 's' : ''
					}: available = ${data.length}, deleted = ${
						documents.length - data.length
					}, total = ${documents.length}`
				);

				const success = true;
				const response = { success, data };

				return res.json(response);
			}
		});
});

module.exports = router;
