const mongoose = require('mongoose');
const collection = 'token';
const commonFields = require('./common/commonFields');

const schema = new mongoose.Schema({
	...commonFields,
	name: {
		type: String,
		required: true,
		unique: true,
	},
	symbol: {
		type: String,
		required: true,
		unique: true,
	},
	type: {
		type: String,
		required: true,
		enum: ['crypto', 'fiat'],
		default: 'crypto',
		// validate: regexWebSite,
	},
});

module.exports = mongoose.model(collection, schema);
