const mongoose = require('mongoose');
const commonFields = require('./common/commonFields');

const collection = 'movement';
console.log(`MODEL of ${collection}`);

const schema = new mongoose.Schema({
	...commonFields,
	platform: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'platform',
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
	quantity: {
		type: Number,
		required: true,
		validate: {
			validator: (quantity) => {
				return quantity > 0;
			},
			message:
				"quantity must be greater than 0. Negative numbers aren't allowed.",
		},
	},
	type: {
		type: String,
		required: true,
		enum: [
			'interest',
			'withdraw',
			'bying',
			'refound',
			'fees',
			'cashback',
			'burning',
			'dividend',
			'trade',
		],
	},
	polarity: {
		// credit + or debit -
		type: String,
		required: true,
		enum: ['+', '-'],
		default: '+',
	},
});

module.exports = mongoose.model(collection, schema);
