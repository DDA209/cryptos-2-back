const mongoose = require('mongoose');
const { webSite: regexWebSite } = require('../utils/regex');
const collection = 'wallet';

// console.log('models wallet.model.js regexWebSite >>>', regexWebSite);

const schema = new mongoose.Schema({
	platform: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'platform',
		required: true,
	},
	token: {
		capital: {
			type: Number,
			required: true,
		},
		token: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'token',
			required: true,
		},
		date: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
});

module.exports = mongoose.model(collection, schema);
