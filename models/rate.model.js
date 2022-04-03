const mongoose = require('mongoose');
const commonFields = require('./common/commonFields');

const collection = 'rate';
console.log(`MODEL of ${collection}`);

/* keep $ rate value of crypto */

const schema = new mongoose.Schema({
	...commonFields,
	token: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'token',
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
		default: Date.now,
	},
});

module.exports = mongoose.model(collection, schema);
