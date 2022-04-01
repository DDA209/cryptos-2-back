const mongoose = require('mongoose');
const commonFields = require('./common/commonFields');

const collection = 'rate';

const schema = new mongoose.Schema({
	...commonFields,
	token: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'token',
		required: true,
	},
	value: {
		type: Number,
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
		],
	},
	polarity: {
		type: String,
		required: true,
		enum: ['+', '-'],
		default: '+',
	},
});

module.exports = mongoose.model(collection, schema);
