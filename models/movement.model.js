const mongoose = require('mongoose');
const { webSite: regexWebSite } = require('../utils/regex');
const collection = 'movement';

// console.log('models wallet.model.js regexWebSite >>>', regexWebSite);

const schema = new mongoose.Schema({
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
