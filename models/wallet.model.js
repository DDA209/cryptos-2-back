const mongoose = require('mongoose');
const commonFields = require('./common/commonFields');

const collection = 'wallet';
console.log(`MODEL of ${collection}`);

const schema = new mongoose.Schema({
	...commonFields,
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
