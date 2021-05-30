const mongoose = require('mongoose');
const { Schema } = require('mongoose');
// const purchaseSchema = require('./Purchase.js');

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		unique: true,
		minlength: 3
	},
	// purchases: [purchaseSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;