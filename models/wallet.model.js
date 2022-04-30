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
	tokens: [
		{
			capital: {
				type: Number,
				required: true,
				default: 0,
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
	],
});

module.exports = mongoose.model(collection, schema);
