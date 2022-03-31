const mongoose = require('mongoose');
const { webSite: regexWebSite } = require('../utils/regex');
const collection = 'token';

// console.log('models wallet.model.js regexWebSite >>>', regexWebSite);

const schema = new mongoose.Schema({
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
