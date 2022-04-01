const mongoose = require('mongoose');

const collection = 'dbLog';

console.log(`--- model ${collection}			config: ok - tests: no`);

const dbLoggerSchema = new mongoose.Schema({
	collectionName: String,
	documentId: String,
	method: String,
	request: Object,
	success: Boolean,
	document: String,
	documentBefore: String,
	user: String,
	error: String,
	creationDateTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model(collection, dbLoggerSchema);
