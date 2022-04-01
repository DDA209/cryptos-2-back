const mongoose = require('mongoose');
const { webSite: regexWebSite } = require('../utils/regex');
const collection = 'platform';
const commonFields = require('./common/commonFields');

// console.log('models wallet.model.js regexWebSite >>>', regexWebSite);

const schema = new mongoose.Schema({
	...commonFields,
	name: {
		type: String,
		required: true,
		unique: true,
	},
	url: {
		type: String,
		required: false,
		unique: true,
		// validate: regexWebSite,
	},
});

module.exports = mongoose.model(collection, schema);
