const mongoose = require('mongoose');
const { webSite: regexWebSite } = require('../utils/regex');
const commonFields = require('./common/commonFields');

const collection = 'platform';
console.log(`MODEL of ${collection}`);

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
	name : String
});

module.exports = mongoose.model(collection, schema);
